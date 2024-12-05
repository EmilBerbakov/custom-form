import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldOptionsComponent } from './form-field-options.component';

describe('FormFieldOptionsComponent', () => {
  let component: FormFieldOptionsComponent;
  let fixture: ComponentFixture<FormFieldOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
