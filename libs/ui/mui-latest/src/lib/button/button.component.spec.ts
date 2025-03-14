import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { MatButtonHarness } from '@angular/material/button/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { jest } from '@jest/globals';
// This test is using the Angular Material Testing Harness

describe('ButtonComponent tests with Material Harness', () => {
  let loader: HarnessLoader;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      {
        imports: [
          ButtonComponent
        ]
      }
    ).compileComponents();
    fixture = TestBed.createComponent(ButtonComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should be disabled when disabled', async () => {
    // const button = await loader.getHarness(MatButtonHarness);
    const button = await loader.getHarness(MatButtonHarness);
    fixture.componentInstance.disabled = true;

    const disabled = await button.isDisabled();
    expect(disabled).toBe(true);
  })

  it('should emit event when clicked', async () => {
    const button = await loader.getHarness(MatButtonHarness);
    jest.spyOn(fixture.componentInstance.buttonClick, 'emit');
    await button.click();
    expect(fixture.componentInstance.buttonClick.emit).toHaveBeenCalledWith('Button Clicked');
  });

  it('should have correct label', async () => {
    const button = await loader.getHarness(MatButtonHarness);
    fixture.componentInstance.label = 'Test Label';
    expect(await button.getText()).toBe('Test Label');
  });

});

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct icon', () => {
    expect(component.icon).toBe('home');
  });

  it('should have the correct button type', () => {
    expect(component.buttonType).toBe('raised');
  });

  it('should have the correct label', () => {
    expect(component.label).toBe('Button Label');
  });

  it('should have the correct disabled state', () => {
    expect(component.disabled).toBe(false);
  });

  it('should have the correct disabled interactive state', () => {
    expect(component.disabledInteractive).toBe(false);
  });

  it('should have the correct disable ripple state', () => {
    expect(component.disableRipple).toBe(false);
  });

  it('should have flat button type when buttonType is flat', () => {
    component.buttonType = 'flat';
    expect(component.buttonType).toBe('flat');
  });
});
