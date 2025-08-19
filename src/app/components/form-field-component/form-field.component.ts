import { Component, computed, input } from '@angular/core';
import { FormField, FormFieldTypes } from '../../models/form-field.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatTimepickerModule } from '@angular/material/timepicker';

@Component({
  selector: 'app-form-field',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTimepickerModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {
  inputFormField = input.required<FormField>();
  fft = FormFieldTypes;
  matFormFieldList = [this.fft.Input, this.fft.Datepicker, this.fft['Range Datepicker'], this.fft.Select, this.fft['Text Area'], this.fft.Timepicker];
  usesMatFormField = computed(() => !!this.matFormFieldList.find(x => x === this.inputFormField().type));


  stringAssert(value: unknown): string {
    return typeof value === 'string' ? value : 'ERROR'
  }
}
