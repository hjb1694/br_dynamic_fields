<template>
  <form class="form" @submit.prevent>
    <!-- <textinput label="My label" v-model="myText" /> -->
    <!-- <phoneinput label="Telephone" v-model="myphone"/> -->
    <selectinput label="Interests" v-model="myselection" :config="{options: ['Biking', 'Hiking']}" />
    <button @click="processsubmit">Submit</button>
  </form>
</template>

<script>
  import TextInput from './components/TextInput.vue';
  import PhoneInput from './components/PhoneInput.vue';
  import SelectInput from './components/SelectInput.vue';

  export default {
    components: {
      'textinput': TextInput, 
      'phoneinput': PhoneInput, 
      'selectinput': SelectInput
    }, 
    data() {
      return {
        myText: '', 
        myphone: '', 
        myselection: ''
      }
    }, 
    methods: {
      processsubmit() {
        console.log('mySelection: ', this.myselection);
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
