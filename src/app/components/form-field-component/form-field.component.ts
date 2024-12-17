import { Component, computed, input, linkedSignal } from '@angular/core';
import { FormField } from '../../models/form-field.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-form-field',
  imports: [MatFormFieldModule, MatInputModule, CommonModule, CdkDrag, MatSelectModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {
  inputFormField = input.required<FormField>();
  linkedFormField = linkedSignal(() => this.inputFormField());
  datepickerOption = computed(() => `datepicker${this.linkedFormField().position}`);
  notLoaded = true;

  ngOnInit(): void {
    this.notLoaded = false;
  }
}
