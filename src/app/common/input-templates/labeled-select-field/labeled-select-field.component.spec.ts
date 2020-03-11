import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledSelectFieldComponent } from './labeled-select-field.component';

describe('LabeledSelectFieldComponent', () => {
  let component: LabeledSelectFieldComponent;
  let fixture: ComponentFixture<LabeledSelectFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledSelectFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
