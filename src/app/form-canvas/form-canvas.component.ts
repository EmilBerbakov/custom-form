import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

import { Component, input } from '@angular/core';
import { FormField, FormFieldTypes } from '../models/form-field.model';
import { FormFieldComponent } from './../components/form-field-component/form-field.component';
import { FormFieldOptionsComponent } from '../components/form-field-options/form-field-options.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-form-canvas',
  imports: [CdkDropList, FormFieldComponent, FormFieldOptionsComponent, CdkDrag, MatSlideToggleModule],
  templateUrl: './form-canvas.component.html',
  styleUrl: './form-canvas.component.scss'
})
export class FormCanvasComponent {

  readonly editMode = input(true);
  formFields: FormField[] = [];

  drop(event: CdkDragDrop<FormField>) {
    moveItemInArray(this.formFields, event.previousIndex, event.currentIndex);
    this.formFields[event.currentIndex].position = event.currentIndex;
    // probably don't have to update every time and can relegate that to a button press or maybe even have it on a debounce that adjusts it if none of the options are drag and dropped after a certain amount of time
    for (let i = 0; i < this.formFields.length; i++) {
      this.formFields[i].position = i;
    }

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
      formControlName: `${type}${amount-1}`,
      options: [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 }
      ]
    })
  }
}
