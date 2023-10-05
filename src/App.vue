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
        fields: fields
      }
    }, 
    methods: {
      processsubmit() {
        for(let field of this.fields){
          console.log(field.value);
        }
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
</style>
