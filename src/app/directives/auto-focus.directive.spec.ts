import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { AutoFocusDirective } from './auto-focus.directive';
import { DirectivesDocumentationComponent } from '../routes/directives-documentation/directives-documentation.component';
import { ElementRef, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('AutoFocusDirective', () => {
  let component: DirectivesDocumentationComponent;
  let fixture: ComponentFixture<DirectivesDocumentationComponent>;
  let inputRef = ViewChild('inputRef');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoFocusDirective, DirectivesDocumentationComponent],
      providers: [
        {
          provide: ElementRef,
          useValue: inputRef,
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(DirectivesDocumentationComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive: AutoFocusDirective = new AutoFocusDirective();
      expect(directive).toBeTruthy();
    });
  });

  /*
  Fix later :)

  xit('shoud be focus after 1000ms', fakeAsync(() => {
    TestBed.runInInjectionContext(() => {
      const directive: AutoFocusDirective = new AutoFocusDirective();
      directive.ngAfterContentInit();
      const inputElement = fixture.debugElement.query(
        By.directive(AutoFocusDirective),
      ).nativeElement;

      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(directive).toBeTruthy();
        console.log(inputRef);
      });
    });
  }));
  */
});
