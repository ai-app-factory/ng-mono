import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressBarSpinnerComponent } from './progress-bar-spinner.component';

describe('ProgressBarSpinnerComponent', () => {
  let component: ProgressBarSpinnerComponent;
  let fixture: ComponentFixture<ProgressBarSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarSpinnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
