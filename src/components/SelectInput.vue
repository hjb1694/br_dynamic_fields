<template>
    <select 
    v-model="selection"
    class="select-input"
    @change="onSelect"
    >
        <option disabled value="">-- {{ label }} --</option>
        <option v-for="option in config.options" :value="option">{{ option }}</option>
    </select>
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
        }, 
        config: {
            type: Object,
            required: true
        }
    }, 
    data(){
        return {
            selection: ''
        }
    }, 
    emits: ['update:modelValue'],
    methods: {
        onSelect(){
            this.$emit('update:modelValue', this.selection);
        }
    }
}
</script>

<style lang="scss">
    .select-input {
        display:block;
        width:100%;
        padding:5px;
        border-radius:5px;
    }
</style>