import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeListComponent } from './cake-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CakeListComponent', () => {
  let component: CakeListComponent;
  let fixture: ComponentFixture<CakeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeListComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
