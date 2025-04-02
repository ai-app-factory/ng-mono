import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClarityDesignComponent } from './clarity-design.component';

describe('ClarityDesignComponent', () => {
  let component: ClarityDesignComponent;
  let fixture: ComponentFixture<ClarityDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClarityDesignComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClarityDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
