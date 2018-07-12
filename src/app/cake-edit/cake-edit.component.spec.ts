import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CakeEditComponent } from './cake-edit.component';
import { CakeService } from '../services/cake.service';
import {FormsModule, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Cake } from '../cake';
import { By } from '@angular/platform-browser';

describe('CakeEditComponent', () => {
  let component: CakeEditComponent;
  let fixture: ComponentFixture<CakeEditComponent>;

  let mockRouter,mockActivatedRoute, service, httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    mockRouter = jasmine.createSpyObj(['navigate']);
    mockActivatedRoute = {
        snapshot: {
            paramMap: {
                get: () => {
                    return of('3');
                }
            }
        }
    }
    TestBed.configureTestingModule({
      declarations: [ CakeEditComponent ],
      imports: [FormsModule, HttpClientTestingModule],
      providers:  [ 
        {provide: Router, useValue: mockRouter},
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: HttpClient, useValue: {}},
        CakeService
    ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeEditComponent);

    // syntactically nicer than using inject
    service = TestBed.get(CakeService);
    httpTestingController = TestBed.get(HttpTestingController);
    component = fixture.componentInstance;
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit logic', () => {
    beforeEach(() => {
        component.cake = {};
    });
        
    it('should get id from route and call CakeService.get with id value', () => {
        let spy = spyOn(service,'get').and.returnValue(of(3));
        fixture.detectChanges();
        // when route params is called return id of 3
        expect(spy).toHaveBeenCalled();

        // expect Cake
        expect(component.cake).toBe(3);
    })

    // don't think else statement can ever be called due to error handling by service
    
    it('should call router.navigate when gotoList method is called', () => {
        component.gotoList();

        expect(mockRouter.navigate).toHaveBeenCalled();
    })

    it('should call CakeService Delete when remove method is called', () => {
        let _val = 'deleteme';
        let spyDelete = spyOn(service,'delete').and.returnValue(of(_val));
        let spyGoto = spyOn(component, 'gotoList');
        component.remove(_val);
        expect(spyDelete).toHaveBeenCalledWith(_val);
        expect(spyGoto).toHaveBeenCalled();
    })

    it('should call CakeService.save when save method is called', () => {
        const testForm = <NgForm>{
            value: {
                id: 1,
                name: "Hello",
                category: "World"
            }
        };
        
        let spy = spyOn(service, 'save').and.returnValue(of('sucessful'))
        let spyGoto = spyOn(component, 'gotoList');

        component.save(testForm);
        expect(spy).toHaveBeenCalled();
        expect(spyGoto).toHaveBeenCalled();
    })
  });

  describe('element tests', () => {
    beforeEach(() => {
        component.cake = { id: 1, name: `Dave's Cake`, comment: 'yummy', imageUrl: '/path/to/cake', yumFactor: 10};
        fixture.detectChanges();
    })

    it('should have a header that contains the cake name', () => {
        let headerDE = fixture.debugElement.query(By.css('h2'));

        expect(headerDE.context).toContain(component.cake.name);
    })
  });
});
