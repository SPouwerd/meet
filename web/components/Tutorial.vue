<script setup>
    import { ValidationObserver } from 'vee-validate';
  import Button from 'primevue/button';

</script>

<template>
  <div>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)">
    <InputText
    id-prop="propID"
    type="text"
    />
    <Button  type="submit"> Submit</Button>
  </form>
  </ValidationObserver>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      
    }
  },
  methods: {
    onSubmit () {
      alert('ok')
    }
  }
}</script>
