import { Component, model, output } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-form-field-options',
  imports: [MatSelectModule],
  templateUrl: './form-field-options.component.html',
  styleUrl: './form-field-options.component.scss'
})
export class FormFieldOptionsComponent {
readonly formFieldOptions = ['Input', 'Select', 'DatePicker', 'DateRangePicker', 'TimePicker', 'Radio', 'Slider', 'CheckBox', 'Toggle'];
selection = output<string>();
selectedFormField = model(null);

//This will communicate with the 2d canvas

//Option 1
//The 2D canvas will have form field and all of the input types injected into it. The component will be created within the canvas component

//Option 2
//Have the 2D canvas create an instance of a custom component whenever output procs
//The output will be given as an input to this custom component instance
//within the custom component will be a switch case that renders each type of form field with editable features
//  for example: each will have an editable label, placeholder, and hint text; 
//the select will have the ability to add options. this will be done by pusing to a modal array that is tied to the @for
//for the option looping (as a nice-to-have also have a message that displays when the modal is @empty)
//the options will be rendered on a 1D column drag-and-drop so that the user can move the options around if they so choose
emitSelection(selection: string): void {
this.selection.emit(selection);
this.selectedFormField.set(null);
}

}
