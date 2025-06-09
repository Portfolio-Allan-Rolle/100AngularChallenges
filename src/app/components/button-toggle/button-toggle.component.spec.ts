import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
} from '@angular/core/testing';
import { IButtonGroup } from '../../models';
import { ButtonToggleComponent } from './button-toggle.component';
import { signal } from '@angular/core';
import { By } from '@angular/platform-browser';

const mockData: IButtonGroup[] = [
  { id: 1, title: 'Bold', isActive: false },
  { id: 2, title: 'Italic', isActive: false },
  { id: 3, title: 'Underline', isActive: false },
];

const mockSelection = signal<IButtonGroup | null>(null);

fdescribe('ButtonToggleComponent', () => {
  let component: ButtonToggleComponent;
  let fixture: ComponentFixture<ButtonToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonToggleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonToggleComponent);
    fixture.componentRef.setInput('data', mockData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('selection should be null on init', () => {
    expect(component.selection()).toBe(null);
  });

  it('should display 3 buttons on init', () => {
    const buttons = fixture.debugElement.queryAll(By.css('[data-button]'));
    const selectionDisplay = fixture.debugElement.query(
      By.css('[data-selection-display]'),
    );
    expect(buttons.length).toEqual(3);
    expect(selectionDisplay).toBeFalsy();
  });

  /*

  FIX LATER :)

  it('should select correct button on click and display correct selection', fakeAsync(() => {
    const spy = spyOn(component, 'onSelectItem');
    const button = fixture.debugElement.queryAll(By.css('[data-button]'))[1];
    button.triggerEventHandler('click', button.nativeElement);
    tick(1000);
    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalledWith(mockData[1]);
      console.log(button);
    });
  }));
  */
});
