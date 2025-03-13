import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { MatButtonHarness } from '@angular/material/button/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { jest } from '@jest/globals';
// This test is using the Angular Material Testing Harness

describe('ButtonComponent tests with Material Harness', () => {
  let loader: HarnessLoader;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      {
        imports: [
          ButtonComponent,
          NoopAnimationsModule
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
    const text = await button.getText();
    expect(text).toBe('Test Label');
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
});
