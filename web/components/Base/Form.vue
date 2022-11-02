<script setup>
  import { ValidationObserver } from 'vee-validate';
  import Button from 'primevue/button';
</script>

<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)">
      <slot />
      <Button type="submit"> 
        {{formButton}}
      </Button>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  props: {
    formButton: {
      type: String,
      default: 'Verzenden'
    }
  },
  data: () => {
    return {
    }
  },
  methods: {
    onSubmit () {
      alert('This form is front-end validated')
    }
  }
}
</script>

<style>
.submit-button {
  float:right ;
}
</style>
