import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuiLibComponent } from './mui-lib.component';

describe('MuiLibComponent', () => {
  let component: MuiLibComponent;
  let fixture: ComponentFixture<MuiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MuiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
