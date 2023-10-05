<template>
  <!-- Pane shown upon successful submission -->
  <div class="results-pane" v-if="success">
    <h1>Results</h1>
    <ul class="result-list">
      <li v-for="field in storeFields">
        <strong>{{ field.label }}:</strong> {{ field.val }}
      </li>
    </ul>
  </div>
  <!-- The form shown on initial load -->
  <form v-else class="form" @submit.prevent>
    <h1>The Dynamic Form</h1>
    <div v-for="field in fields" class="form-grp">
      <!-- This is a dynamic component below. A great feature of Vue ;) -->
      <component
      :is="field.type"
      :label="field.label"
      :config="field.config"
      v-model="field.value"
      ></component>
    </div>
    <button class="subbut" @click="processsubmit">Submit</button>
    <!-- Error box shown only if errors are present. -->
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
        errors: [], 
        success: false
      }
    }, 
    methods: {
      validate(){
        // Reset errors upon each submission
        this.errors = [];
        
        /* 
        Iterate through each field and check for the input type.
        Specific validations are included for each input type.
        */
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

          }else if(field.type === 'checkboxgroup'){

            if(
              field.validations.includes('notempty') &&
              !field.value
            ){
              this.errors.push(`Please select at least one value from ${field.label}.`);
            }

          }
        }

      },
      /* 
      This is fired once the submit button is clicked.
      */
      processsubmit() {
        this.validate();
        if(this.errors.length) return;
        for(let field of this.fields){
          this.$store.dispatch('addField', {
            label: field.label, 
            val: field.value
          });
        }
        this.success = true;
      }
    }, 
    computed: {
      storeFields(){
        return this.$store.getters.fields;
      }
    }
  }
</script>

<style lang="scss">
  .form, 
  .results-pane {
    width:80%;
    margin:2rem auto;
    background:rgba(255,255,255,.8);
    padding:2rem;
    border-radius:5px;
  }

  .form-grp {
    margin:2rem 0;
  }

  .errbox {
    background: #ffeeee;
    list-style-position: inside;
    padding:1rem;
    margin-top:2rem;
    color:#f00;
    border:2px solid #f00;
    border-radius:5px;
    font-size:1.4rem;
  }

  .result-list {
    list-style-position: inside;
    font-size:1.4rem;
  }

  .subbut {
    font-size:1.8rem;
    border:none;
    padding:1rem;
    cursor:pointer;
    background:#198dbb;
    color:#fff;
    display:inline-block;
    border-radius:5px;
    font-weight:bold;
  }
</style>
