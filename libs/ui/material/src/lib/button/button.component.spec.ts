import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

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

  it('should emit buttonClick event', () => {
    const buttonClickSpy = jest.spyOn(component.buttonClick, 'emit');
    component.onButtonPress();
    expect(buttonClickSpy).toHaveBeenCalledWith('Button Pressed from ButtonComponent');
  });

  it('should call onClick function', () => {
    const onClickSpy = jest.spyOn(component, 'onClick');
    component.onButtonPress();
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should set default values', () => {
    expect(component.label).toEqual('Button Text');
    expect(component.disabled).toBe(false);
    expect(component.disabledInteractive).toBe(false);
    expect(component.disableRipple).toBe(false);
    expect(component.buttonType).toEqual('mat-raised-button');
    expect(component.icon).toEqual('home');
    expect(component.shape).toEqual('rounded');
    expect(component.color).toEqual('#6200ea');
    expect(component.typography).toEqual('paragraph');
    expect(component.size).toEqual(14);
  });

  it('should set input values', () => {
    component.label = 'Test Button';
    component.disabled = true;
    component.disabledInteractive = true;
    component.disableRipple = true;
    component.buttonType = 'mat-button';
    component.icon = 'settings';
    component.shape = 'pill';
    component.color = 'accent';
    component.typography = 'heading1';
    component.size = 14;

    expect(component.label).toEqual('Test Button');
    expect(component.disabled).toBe(true);
    expect(component.disabledInteractive).toBe(true);
    expect(component.disableRipple).toBe(true);
    expect(component.buttonType).toEqual('mat-button');
    expect(component.icon).toEqual('settings');
    expect(component.shape).toEqual('pill');
    expect(component.color).toEqual('accent');
    expect(component.typography).toEqual('heading1');
    expect(component.size).toEqual(14);
  });


});
