import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlideToggleComponent } from './slide-toggle.component';

describe('SlideToggleComponent', () => {
  let component: SlideToggleComponent;
  let fixture: ComponentFixture<SlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SlideToggleComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SlideToggleComponent);
    component = fixture.componentInstance;
    component.slideToggles = [
      {
        label: 'I agree to the terms and conditions',
        checked: false,
        disabled: false,
        formControlName: 'terms'
      }
    ]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
