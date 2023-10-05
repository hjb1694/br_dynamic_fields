<template>
    <fieldset>
        <legend>{{ label }}</legend>
        <label v-for="option in config.options">
            <input 
            type="checkbox" 
            :value="option" 
            @change="onCheck($event.target.value, $event.target.checked)"
            /> {{ option }}
        </label>
    </fieldset>
</template>

<script>
    export default {
        props: [
            'modelValue', 
            'label', 
            'config'
        ], 
        emits: ['update:modelValue'], 
        data(){
            return {
                selectedValues: ""
            }
        },
        methods: {
            onCheck(val, checked){
                const selectVals = this.selectedValues.length ? this.selectedValues.split(",") : [];
                if(checked){
                    selectVals.push(val);
                }else{
                    const idx = selectVals.findIndex(value => value === val);
                    selectVals.splice(idx,1);
                }
                this.selectedValues = selectVals.join();
                console.log(this.selectedValues);
                this.$emit('update:modelValue', this.selectedValues);
            }
        }
    }
</script>
