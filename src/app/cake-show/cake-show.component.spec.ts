import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeShowComponent } from './cake-show.component';

describe('CakeShowComponent', () => {
  let component: CakeShowComponent;
  let fixture: ComponentFixture<CakeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
