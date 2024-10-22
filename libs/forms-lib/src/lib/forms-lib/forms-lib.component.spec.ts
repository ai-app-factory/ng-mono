import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsLibComponent } from './forms-lib.component';

describe('FormsLibComponent', () => {
  let component: FormsLibComponent;
  let fixture: ComponentFixture<FormsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
