import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RefinedMuiLibComponent } from './refined-mui-lib.component';

describe('RefinedMuiLibComponent', () => {
  let component: RefinedMuiLibComponent;
  let fixture: ComponentFixture<RefinedMuiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefinedMuiLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RefinedMuiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
