<script setup>
import { ValidationObserver } from 'vee-validate'
import Button from 'primevue/button'
</script>

<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(sumbitHandler)">
      <slot />
      <Button type="submit">
        {{ formButton }}
      </Button>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  props: {
    formButton: {
      type: String,
      default: 'Bevestig',
    },
    sumbitHandler: {
      type: Function,
      default: () => {
        alert(this.$refs.formName)
      },
    },
  },
  data: () => {
    return {}
  },
  methods: {},
}
</script>

<style>
.submit-button {
  float: right;
}
</style>
