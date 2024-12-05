# Goal
Create a Form Generator with just Angular and Material Angular

# Overarching Goals
1. Customazable forms that users can create
2. when they create the form, generate a JSON blob that represents the shape of the report so that it can be saved to a NoSQL db

# Goals for this demo
1. Have a Dropdown that lets a user select from a list of Form Fields
2. Have the label be editable
3. Allow for adding validators. Specifically required, max and min values, and max and min length
    - Optional: allow for the ability to write a regex pattern that can be used for a validator
4. have a 2D Drag-and-Drop Canvas that lets a user move form fields they've already put onto the canvas around
5. Have an input for the Title and a text area for the description

# How this will work

## Creating the Form
1. We start with a dropdown of form field options. Selecting one will output the value to the 2D Drag-and-Drop canvas
2. The canvas will create an instance of a custom component that will render a customizable form field based on whatever was selected in the step 1 dropdown. This will be an input for the custom component
3. The custom component will always be a mat-form-field with an editable label, hint, placeholder, if it's disabled, and if it is required. Each form field's width will also be adjustable to the following flex row width options: 100%, 75%, 66%, 50%, 33%, or 25%
4. Each type will have their own specific set of customizable features
    - input will have a toggle between text and number; this toggle will control whether the user can add a min-max length or min-max validator (for text and number, respectively)
    - DatePicker will have a min-max validator option
    - DateRangePicker will allow the user to add a validator that makes sure the first date comes before the second date
    - Select will ultimately have the ability to do grouped options, but for now just do options
        - whenever an option is added, it will be added to a 1D drag-and-drop column that the user can use to move the order of the options around
    - Slider gives a min-max option
    - checkbox lets user add and remove options. options will be added to a 1D drag-and-drop row that the user can use to move the order of the options around
5. The user will then have an input to name the field and a textarea to provide a description for the form, along with a button to save the form when they are done

## Saving the form
On save, we will look at what is in the 2d canvas and build out a JSON object that represents the form. It will look something like:

```
{
    "title": string,
    "uuid": string,
    "version": number,
    "createdBy": string,
    "createdDate": DateTime,
    "modifiedBy": string,
    "modifiedDate": DateTime,
    "pages":
        [
            "name": string,
                [
                    [
                        {
                            "label": string,
                            "type": string,
                            "hint": string,
                            "placeholder": string,
                            "validators":
                                [
                                    {
                                        "type": string,
                                        "value": string | number
                                    }
                                ]
                        }
                    ]

                ]

        ]
}
```

where each array in the name array represents a flex row, and in order is the form from top to bottom.
Then, within the row array, each form field will be there, where the first form field is the left-most.
Each form field will have a size attribute that can be either 1, .75, .666, .5, .333, or .25. This represents whether the form field takes up the whole row, half, a third, or a quarter. The validators value will be representative of what argument goes inside the validator function. So if a form field has a MaxLength of 3 validator, it would read:
```
{
    "type": "maxlength",
    "value: 3
}
```