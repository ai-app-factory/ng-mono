import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicIconComponent } from './basic-icon.component';

describe('BasicIconComponent', () => {
  let component: BasicIconComponent;
  let fixture: ComponentFixture<BasicIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
