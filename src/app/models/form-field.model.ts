export type FormFieldSize = '100%' | '75%' | '66%' | '50%' | '33%' | '25%';

export enum FormFieldTypes {
  'Input' = 'input',
  'Datepicker' = 'datepicker',
  'Range Datepicker' = 'rangeDatepicker',
  'Select' = 'select',
  'Slider' = 'slider',
  'Checkbox' = 'checkbox',
  'Radio' = 'radio',
  'Timepicker' = 'timepicker',
  'Range Timepicker' = 'rangeTimepicker'
}

export interface FormField {
  label: string,
  type: FormFieldTypes,
  position: number,
  size: FormFieldSize,
  hint?: string,
  placeholder?: string,
  options?: Options[],
  formControlName: string
}

export interface Options {
  value: string,
  label: string
}

export interface Validators {
  type: string,
  value?: string | number | Date | RegExp
}
