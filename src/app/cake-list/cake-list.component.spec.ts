import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CakeListComponent } from './cake-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CakeService } from '../services/cake.service';
import { of } from 'rxjs/internal/observable/of';
import { Cake } from '../cake';
import { By } from '@angular/platform-browser';

describe('CakeListComponent', () => {
  let component: CakeListComponent;
  let fixture: ComponentFixture<CakeListComponent>;
  let service;
  let mockCakeService = jasmine.createSpyObj(['all']);
  let FAKECAKE: Array<Cake> = [
    { id: 1, name: `Dave's Cake`, comment: 'yummy', imageUrl: '/path/to/cake', yumFactor: 10},
    { id: 2, name: `Paul's Cake`, comment: 'booyah', imageUrl: '/path/to/cake', yumFactor: 12}
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeListComponent ],
      providers: 
        [
          {provide: CakeService, useValue: mockCakeService}
        ],
      schemas: [NO_ERRORS_SCHEMA],

    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeListComponent);
    service = TestBed.get(CakeService);
    component = fixture.componentInstance;
    mockCakeService.all.and.returnValue(of(FAKECAKE));
  });
  
  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  
  it('should get an empty list of cakes before ngOnInit is run', () => {
    expect(fixture.componentInstance.cakes.length).toBe(0);
  })

  it('should get a list of cakes on init', () => {
    fixture.detectChanges(); // run ngOnInit
  
    expect(fixture.componentInstance.cakes.length).toBe(2);
  });

  it(`should create an anchor tag for each cake`, () => {
    fixture.detectChanges();

    const anchorDE = fixture.debugElement.queryAll(By.css('.list-group-item'));

    expect(anchorDE.length).toBe(2);
  })
});
