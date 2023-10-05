<template>
  <form class="form" @submit.prevent>
    <div v-for="field in fields" class="form-grp">
      <component
      :is="field.type"
      :label="field.label"
      :config="field.config"
      v-model="field.value"
      ></component>
    </div>
    <button @click="processsubmit">Submit</button>
    <ul v-if="errors.length" class="errbox">
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </form>
</template>

<script>
  import fields from "./fields";

  import TextInput from './components/TextInput.vue';
  import PhoneInput from './components/PhoneInput.vue';
  import SelectInput from './components/SelectInput.vue';
  import TextareaInput from "./components/TextareaInput.vue";
  import CheckboxGroup from "./components/CheckboxGroup.vue";

  export default {
    components: {
      'textinput': TextInput, 
      'phoneinput': PhoneInput, 
      'selectinput': SelectInput, 
      'textareainput': TextareaInput, 
      'checkboxgroup': CheckboxGroup
    }, 
    data() {
      return {
        fields: fields,
        errors: []
      }
    }, 
    methods: {
      validate(){
        this.errors = [];

        for(let field of this.fields){
          if(field.type === 'textinput'){
            for(let validation of field.validations){

              if(
                validation === 'notempty' &&
                field.value.length < 1
              ){
                this.errors.push(`${field.label} must not be empty.`);
              }
              
              if(validation.startsWith('minlength')){
                const len = +validation.split(':')[1];
                if(field.value.length < len){
                  this.errors.push(`${field.label} must be at least ${len} characters.`);
                }

              }

            }
          }else if(field.type === 'phoneinput') {

            if(!/\([0-9]{3}\) [0-9]{3}\-[0-9]{4}/.test(field.value)){
              this.errors.push(`${field.label} is invalid.`);
            }

          }else if(field.type === 'selectinput') {

            if(
              field.validations.includes('notempty') &&
              !field.value
            ){
                this.errors.push(`${field.label} is a required field.`);
            }

          }
        }

      },
      processsubmit() {
        this.validate();
      }
    }
  }
</script>

<style lang="scss">
  .form {
    width:80%;
    margin:2rem auto;
    background:rgba(255,255,255,.8);
    padding:2rem;
    border-radius:5px;
  }

  .form-grp {
    margin:2rem 0;
  }
</style>
