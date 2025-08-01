export type FormFieldSize = '100%' | '75%' | '66%' | '50%' | '33%';

export enum FormFieldTypes {
  'Input' = 'input',
  'Datepicker' = 'datepicker',
  'Range Datepicker' = 'rangeDatepicker',
  'Select' = 'select',
  'Text Area' = 'textarea',
  'Slider' = 'slider',
  'Checkbox' = 'checkbox',
  'Radio' = 'radio',
  'Timepicker' = 'timepicker',
  'Button Toggle' = 'buttonToggle'
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
  value: unknown,
  label: string
}

export interface Validators {
  type: string,
  value?: string | number | Date | RegExp
}
