<template>
    <div class="textarea-input">
        <textarea 
        @input="onInput($event.target.value)" 
        :value="modelValue" 
        class="textarea-input__field" 
        rows="10"
        placeholder=" "
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

<style lang="scss" scoped>
    .textarea-input {
        position:relative;
        background:#fff;
        height:16rem;
        border:1px solid #bbb;
        border-radius:5px;
        overflow: hidden;

        &__field {
            height:14.5rem;
            position:absolute;
            bottom:0;
            left:0;
            width:100%;
            outline:none;
            border:none;
            padding:4px;
            font-family: inherit;
            font-size:1.6rem;
            resize:none;
        }

        &__label {
            position:absolute;
            top:1.4rem;
            left:4px;
            pointer-events: none;
            font-size:1.8rem;
            transition:all .3s;
        }

        &__field:focus + .textarea-input__label, 
        &__field:not(:placeholder-shown) + .textarea-input__label {
            font-size:1.3rem;
            transform:translateY(-1rem);
        }
    }
</style>