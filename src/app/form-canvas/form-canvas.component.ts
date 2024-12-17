import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormField, FormFieldTypes } from '../models/form-field.model';
import { FormFieldComponent } from './../components/form-field-component/form-field.component';
import { FormFieldOptionsComponent } from '../components/form-field-options/form-field-options.component';

@Component({
  selector: 'app-form-canvas',
  imports: [CdkDropList, CommonModule, FormFieldComponent, FormFieldOptionsComponent, CdkDrag],
  templateUrl: './form-canvas.component.html',
  styleUrl: './form-canvas.component.scss'
})
export class FormCanvasComponent {

  formFields: FormField[] = [];

  drop(event: CdkDragDrop<FormField>) {
    moveItemInArray(this.formFields, event.previousIndex, event.currentIndex);
    console.log(this.formFields)
  }
  addFormField(type: FormFieldTypes) {
    const amount = this.formFields.length + 1;
    this.formFields.push({
      label: `Form Field ${amount}`,
      type: type,
      position: amount - 1,
      size: '100%',
      placeholder: 'Testing',
      hint: 'hint text goes here',
      formControlName: `${type}${amount-1}`
    })
  }
}
