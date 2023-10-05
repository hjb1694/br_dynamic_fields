<template>
  <form class="form" @submit.prevent>
    <!-- <textinput label="My label" v-model="myText" /> -->
    <phoneinput label="Telephone" v-model="myphone"/>

  </form>
</template>

<script>
  import TextInput from './components/TextInput.vue';
  import PhoneInput from './components/PhoneInput.vue';

  export default {
    components: {
      'textinput': TextInput, 
      'phoneinput': PhoneInput
    }, 
    data() {
      return {
        myText: '', 
        myphone: ''
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
