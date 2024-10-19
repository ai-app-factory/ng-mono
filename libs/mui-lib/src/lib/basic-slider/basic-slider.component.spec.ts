import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicSliderComponent } from './basic-slider.component';

describe('BasicSliderComponent', () => {
  let component: BasicSliderComponent;
  let fixture: ComponentFixture<BasicSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
