<script setup>
import { ValidationProvider } from 'vee-validate'
import InputText from 'primevue/inputtext'
</script>

<template>
  <ValidationProvider
    v-slot="{ errors }"
    :rules="validation"
    class="validation-wrapper"
  >
    <InputText v-model="inputValue" :type="type" />
    <div class="description">{{ errors[0] }}</div>
  </ValidationProvider>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    validation: {
      type: String,
      default: 'required',
    },
  },
  data() {
    return {
      inputValue: '',
    }
  },
}
</script>

<style>
.validation-wrapper {
  position: relative;
  font-size: small;
}
.description {
  color: var(--blue-dark);
  position: absolute;
  top: 36px;
  left: 8px;
}
</style>
