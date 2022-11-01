<script setup>
    import { ValidationProvider } from 'vee-validate';
    import InputText from 'primevue/inputtext';
</script>

<template>
    <ValidationProvider 
    v-slot="{ errors }"
    :rules="validations"
    >
        <InputText 
            :id="idProp"
            v-model="inputValue"
            :type="typeProp"
            />

  <span>{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script>
  export default {
    props: {
      idProp: {
        type: String,
        required: true
      },
      typeProp: {
        type: String,
        required: false,
        default: 'text'
      },
      validations: {
        type: String,
        default: 'required'
      },
    },
    data() {
      return {
        v: ['teeeet'],
        inputValue: 'test'
      }
    },
    methods: {

    }
  }
</script>


