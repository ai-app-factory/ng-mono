import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChipDragDropComponent } from './chip-drag-drop.component';

describe('ChipDragDropComponent', () => {
  let component: ChipDragDropComponent;
  let fixture: ComponentFixture<ChipDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipDragDropComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
