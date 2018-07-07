import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { CakeEditComponent } from './cake-edit.component';
import { Cake } from '../cake';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('CakeEditComponent', () => {
  let component: CakeEditComponent;
  let fixture: ComponentFixture<CakeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        RouterTestingModule
      ],
      declarations: [ CakeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    let response: Cake = {
      id: 1,
      name: 'name',
      comment: 'comment',
      imageUrl: 'http://images.waracle.com/1.png',
      yumFactor: 5
    }
    expect(component).toBeTruthy();
  }));
});
