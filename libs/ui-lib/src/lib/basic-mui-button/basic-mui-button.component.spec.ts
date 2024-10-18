import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicMuiButtonComponent } from './basic-mui-button.component';

describe('BasicMuiButtonComponent', () => {
  let component: BasicMuiButtonComponent;
  let fixture: ComponentFixture<BasicMuiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicMuiButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicMuiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
