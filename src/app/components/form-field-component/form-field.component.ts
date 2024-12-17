import { Component, computed, input, linkedSignal } from '@angular/core';
import { FormField } from '../../models/form-field.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-form-field',
  imports: [MatFormFieldModule, MatInputModule, CommonModule, MatSelectModule, MatDatepickerModule, MatIconModule, MatButtonModule, MatSliderModule, MatButtonToggleModule],
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
