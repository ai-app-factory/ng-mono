import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StackedChipsComponent } from './stacked-chips.component';

describe('StackedChipsComponent', () => {
  let component: StackedChipsComponent;
  let fixture: ComponentFixture<StackedChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackedChipsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StackedChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
