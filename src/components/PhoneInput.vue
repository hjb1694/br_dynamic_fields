<template>
    <div class="phone-input">
        <input
        v-model="val" 
        class="phone-input__field" 
        type="text" 
        @input="onInput"
        maxlength="14"
        placeholder=" "
        />
        <label class="phone-input__label">{{ label }}</label>
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
        data(){
            return {
                val: ''
            }
        },
        emits: ['update:modelValue'],
        methods: {
            onInput() {
                
                const charArr = this.val.split('');
                const filtered = charArr.filter((char) => /[0-9]/.test(char));

                console.log(filtered);
                
                if(filtered.length > 0){
                    filtered.unshift('(');
                }

                if(filtered.length >= 4){
                    filtered.splice(4,0,') ');
                }

                if(filtered.length >= 8){
                    filtered.splice(8,0,'-');
                }

                this.val = filtered.join('');

                this.$emit('update:modelValue', this.val);

            }
        }
    }
</script>

<style lang="scss" scoped>

.phone-input {

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

&__field:focus + .phone-input__label, 
&__field:not(:placeholder-shown) + .phone-input__label {
    font-size:1rem;
    transform: translateY(-2rem);
}

}
</style>