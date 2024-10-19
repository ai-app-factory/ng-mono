import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RaisedMuiButtonComponent } from './raised-mui-button.component';

describe('RaisedMuiButtonComponent', () => {
  let component: RaisedMuiButtonComponent;
  let fixture: ComponentFixture<RaisedMuiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaisedMuiButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RaisedMuiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
