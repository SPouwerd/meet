<script setup>
import { ValidationObserver } from 'vee-validate'
import Button from 'primevue/button'
</script>

<template>
  <div class="surface-card p-4 shadow-2 border-round">
    <div class="font-medium text-3xl text-900 mb-3">Account registratie</div>
    <div class="text-500 mb-5">
      Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit
      rutrum.
    </div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(formHandler)">
        <li
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-800 w-6 md:w-2 font-medium">Gebruikersnaam:</div>
          <BaseText ref="username" type="text" validation="required" />
        </li>
        <li
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-800 w-6 md:w-2 font-medium">E-mail:</div>
          <BaseText ref="email" type="text" validation="email" />
        </li>
        <li
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-800 w-6 md:w-2 font-medium">Wachtwoord:</div>
          <BaseText ref="password" type="password" validation="required" />
        </li>
        <Button type="submit"> Bevestig </Button>
        <Button @click="postUser(registerData)"> post user </Button>
        <Button @click="allUser"> get all users </Button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  props: {},
  data: () => {
    return {
      registerData: {
        username: 'i',
        email: 'stijn@est.nl',
        password: 'i',
      },
    }
  },
  methods: {
    formHandler() {
      this.registerData.username = this.$refs.username.inputValue
      this.registerData.email = this.$refs.email.inputValue
      this.registerData.password = this.$refs.password.inputValue
      this.postUser(JSON.stringify(this.registerData))
    },
    async postUser(data) {
      console.log(data)
      const res = await this.$axios.post('/user', data)
      console.log(JSON.stringify(res.data))
      return res
    },
    async allUser() {
      const res = await this.$axios.get('/user')
      console.log(JSON.stringify(res.data))
      return res
    },
  },
}
</script>

<style>
.submit-button {
  float: right;
}
</style>
