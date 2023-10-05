/* 
The types below are sensitive and must be written in a specific way to work.
Possible values:
-- textinput
-- phoneinput
-- selectinput
-- textareainput
-- checkboxgroup

Options need to be provided in the form of an array of strings for 
input types that may have multiple selection, such as selectinput and checkboxgroup
*/

export default [
    {
        id: 1,
        type: "textinput",
        label: "Full Name",
        validations: ["notempty", "minlength:3"],
        config: {}, 
        value: ""
    }, 
    {
        id: 2,
        type: "phoneinput",
        label: "Phone",
        validations: [], 
        config: {}, 
        value: ""
    }, 
    {
        id: 3, 
        type: "selectinput",
        label: "Interests",
        validations: ['notempty'],
        config: {
            options: [
                'mountains', 
                'oceans', 
                'deserts'
            ], 
        }, 
        value: ""
    }, 
    {
        id: 4,
        type: "textareainput",
        label: "Description",
        validations: ["maxlength:500"], 
        config: {
            maxlength: 500
        }, 
        value: ""
    }, 
    {
        id: 5, 
        type: "checkboxgroup", 
        label: "Travel", 
        validations: ["notempty"], 
        config: {
            options: [
                'Car', 
                'Bus', 
                'Train'
            ]
        }, 
        value: ""
    }
]