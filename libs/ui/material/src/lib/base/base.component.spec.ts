import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  template: `
    <lib-base
      [typography]="typography"
      [shape]="shape"
      [color]="color"
      [size]="size"
      [disabled]="disabled"
    ></lib-base>
  `
})
class TestHostComponent {
  typography: 'heading1' | 'heading2' | 'paragraph' = 'paragraph';
  shape: 'rounded' | 'square' | 'pill' = 'rounded';
  color: string = '#6200ea';
  size: number = 14;
  disabled: boolean = false;
}

describe('BaseComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseComponent, TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should apply typography class', () => {
  //   component.typography = 'heading1';
  //   fixture.detectChanges();
  //   const baseElement = fixture.nativeElement.querySelector('lib-base div');
  //   expect(baseElement.classList).toContain('heading1');
  // });

  // it('should apply shape class', () => {
  //   component.shape = 'pill';
  //   fixture.detectChanges();
  //   const baseElement = fixture.nativeElement.querySelector('lib-base div');
  //   expect(baseElement.classList).toContain('pill');
  // });

  // it('should apply custom color style', () => {
  //   component.color = '#ff0000';
  //   fixture.detectChanges();
  //   const baseElement = fixture.nativeElement.querySelector('lib-base div');
  //   expect(baseElement.style.backgroundColor).toBe('rgb(255, 0, 0)');
  // });

  // it('should apply disabled class', () => {
  //   component.disabled = true;
  //   fixture.detectChanges();
  //   const baseElement = fixture.nativeElement.querySelector('lib-base div');
  //   expect(baseElement.classList).toContain('disabled');
  // });
});
