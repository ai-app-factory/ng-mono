import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicToolbarComponent } from './basic-toolbar.component';

describe('BasicToolbarComponent', () => {
  let component: BasicToolbarComponent;
  let fixture: ComponentFixture<BasicToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
