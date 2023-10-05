<template>
    <fieldset>
        <legend>{{ label }}</legend>
        <label v-for="option in config.options">
            <input 
            type="checkbox" 
            :value="option" 
            @change="onCheck($event.target.value, $event.target.checked)"
            /> <span>{{ option }}</span>
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

<style lang="scss" scoped>
    fieldset {
        border:none;
    }

    legend {
        font-size:1.6rem;
    }

    label {
        display:flex;
        font-size:1.4rem;

        span {
            margin-left:8px;
        }
    }
</style>
