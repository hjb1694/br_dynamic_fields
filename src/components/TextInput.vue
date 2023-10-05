<template>
    <div class="text-input">
        <input 
        class="text-input__field" 
        type="text"
        @input="$emit('update:modelValue', $event.target.value)"
        placeholder=" "
        />
        <label class="text-input__label">{{ label }}</label>
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
        } , 
        emits: ['update:modelValue']
    }
</script>

<style lang="scss" scoped>
    .text-input {

        position:relative;
        height:4rem;
        background:#fff;
        border:1px solid #aaa;
        border-radius: 3px;
        overflow: hidden;

        &:focus-within {
            border:1px solid #2f7dd0;
        }

        &__field {
            display:block;
            position:absolute;
            left:0;
            bottom:0;
            width:100%;
            border:none;
            font-size:1.8rem;
            color:#333;
            padding:5px;
            background:transparent;
            outline:none;
        }

        &__label {
            display:block;
            position:absolute;
            bottom:5px;
            left:5px;
            pointer-events: none;
            transition: all .3s;
            font-size:1.8rem;
            color:#444;
        }

        &__field:focus + .text-input__label, 
        &__field:not(:placeholder-shown) + .text-input__label {
            font-size:1rem;
            transform: translateY(-2rem);
        }

    }
</style>