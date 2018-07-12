import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CakeShowComponent } from './cake-show.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('CakeShowComponent', () => {
  let component: CakeShowComponent;
  let fixture: ComponentFixture<CakeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeShowComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
