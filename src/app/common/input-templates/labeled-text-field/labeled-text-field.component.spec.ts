import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledTextFieldComponent } from './labeled-text-field.component';

describe('LabeledTextFieldComponent', () => {
  let component: LabeledTextFieldComponent;
  let fixture: ComponentFixture<LabeledTextFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledTextFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
