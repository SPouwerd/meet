<script setup>
import { ValidationObserver } from 'vee-validate'
import Button from 'primevue/button'
</script>

<template>
  <div class="surface-card p-3 shadow-6 border-round">
    <div class="font-medium text-3xl text-900 mb-3">Account registratie</div>
    <div class="text-500 mb-5">
      Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit
      rutrum. {{ $auth.user }}
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
        <Button @click="allUser"> all users </Button>
        <Button @click="postUser(registerData)"> new user </Button>
        <Button @click="handleLogIn"> login </Button>
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
        username: '666666',
        email: '666666@666666.nl',
        password: '666666',
      },
    }
  },
  computed: {},
  methods: {
    formHandler() {
      this.registerData.username = this.$refs.username.inputValue
      this.registerData.email = this.$refs.email.inputValue
      this.registerData.password = this.$refs.password.inputValue
      this.postUser(this.registerData)
    },
    async postUser(data) {
      try {
        const res = await this.$axios.post('/user', data)
        // TODO: $toast succes message to frontend
        console.log(res.statusText)
        // TODO: fix reseting form
        // this.$validator.reset() // not working
        return res
      } catch (error) {
        // TODO: $toast error message to frontend
        console.log(error.response.data.message)
      }
    },
    handleLogIn() {
      this.$auth.loginWith('local', {
        data: {
          email: this.registerData.email,
          password: this.registerData.password,
        },
      })
      console.log(this.$auth.user)
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
