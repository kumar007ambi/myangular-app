import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentFormsComponent } from './assignment-forms.component';

describe('AssignmentFormsComponent', () => {
  let component: AssignmentFormsComponent;
  let fixture: ComponentFixture<AssignmentFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentFormsComponent]
    });
    fixture = TestBed.createComponent(AssignmentFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
