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
        type: "telinput",
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
        config: {}, 
        value: ""
    }
]