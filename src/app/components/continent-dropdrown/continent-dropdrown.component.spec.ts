import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentDropdrownComponent } from './continent-dropdrown.component';

describe('ContinentDropdrownComponent', () => {
  let component: ContinentDropdrownComponent;
  let fixture: ComponentFixture<ContinentDropdrownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinentDropdrownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinentDropdrownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
