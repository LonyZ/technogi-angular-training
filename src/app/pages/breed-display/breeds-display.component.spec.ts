import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedDisplayComponent } from './breeds-display.component';

describe('BreedDisplayComponent', () => {
  let component: BreedDisplayComponent;
  let fixture: ComponentFixture<BreedDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
