<template>
    <div class="textarea-input">
        <textarea 
        @input="onInput($event.target.value)" 
        :value="modelValue" 
        class="textarea-input__field" 
        rows="10"
        ></textarea>
        <label class="textarea-input__label">{{ label }}</label>
    </div>
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: String
            }, 
            label: {
                type: String, 
                required: true
            }
        }, 
        emits: ['update:modelValue'],
        methods: {
            onInput(value){
                this.$emit('update:modelValue', value);
            }
        }
    }
</script>