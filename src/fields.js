export default [
    {
        id: 1,
        type: "text",
        label: "Full Name",
        validations: ["notempty", "minlength:3"],
        config: {}
    }, 
    {
        id: 2,
        type: "tel",
        label: "Phone",
        validations: [], 
        config: {}
    }, 
    {
        id: 3, 
        type: "select",
        label: "Interests",
        validations: ['notempty'],
        config: {
            options: [
                'mountains', 
                'oceans', 
                'deserts'
            ], 
        }
    }, 
    {
        id: 4,
        type: "textarea",
        label: "Description",
        validations: ["maxlength:500"], 
        config: {}
    }
]