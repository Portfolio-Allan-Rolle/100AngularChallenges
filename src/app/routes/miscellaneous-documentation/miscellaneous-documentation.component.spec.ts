import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousDocumentationComponent } from './miscellaneous-documentation.component';

describe('MiscellaneousDocumentationComponent', () => {
  let component: MiscellaneousDocumentationComponent;
  let fixture: ComponentFixture<MiscellaneousDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiscellaneousDocumentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscellaneousDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
