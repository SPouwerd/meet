<script setup>
</script>
<template>
    <div class="surface-card p-4 shadow-2 border-round">
        <div class="font-medium text-3xl text-900 mb-3">Account registratie</div>
        <div class="text-500 mb-5">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
        <ul class="list-none p-0 m-0">
        <BaseForm
        formName="register"
        formButton="Registeren"
        :sumbitHandler="formRegister"
        >
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-800 w-6 md:w-2 font-medium">Gebruikersnaam:</div>
            <BaseText
                ref="username"
                type="text"
                validation="required"
                />
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-800 w-6 md:w-2 font-medium">E-mail:</div>
            <BaseText
                ref="email"
                type="text"
                validation="email"
                />
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-800 w-6 md:w-2 font-medium">Wachtwoord:</div>
            <BaseText
                ref="password"
                type="password"
                validation="required"
                />
        </li>
    </BaseForm>
    </ul>
</div>
</template>
<script>
  export default {
    props: {},
    data() {
      return {
        registerData: {
            username: '',
            email: '',
            password: ''
        }
      }
    },
    methods: {
        formRegister() {
            this.registerData.username = this.$refs.username.inputValue
            this.registerData.email = this.$refs.email.inputValue
            this.registerData.password = this.$refs.password.inputValue
            console.log(JSON.stringify(this.registerData))
        }
    },
  }
</script>
