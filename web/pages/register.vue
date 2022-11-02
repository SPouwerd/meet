<script setup>
</script>
<template>
<!-- eslint-disable max-len -->
    <div class="surface-card p-4 shadow-2 border-round">
    <BaseForm
    :handleForm="formRegister"
    >
    <div class="font-medium text-3xl text-900 mb-3">Account registratie</div>
    <div class="text-500 mb-5">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
    <ul class="list-none p-0 m-0">
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-800 w-6 md:w-2 font-medium">Gebruikersnaam:</div>
            <BaseText
                id="username"
                type="text"
                validation="required"
                />
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-800 w-6 md:w-2 font-medium">E-mail:</div>
            <BaseText
                id="email"
                type="text"
                validation="email"
                />
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-800 w-6 md:w-2 font-medium">Wachtwoord:</div>
            <BaseText
                id="password"
                type="password"
                validation="password"
                />
        </li>
    </ul>
</BaseForm>
</div>
</template>
<script>
  export default {
    props: {},
    data() {
      return {
      }
    },
    methods: {
        formRegister() {

        }
    },
  }
</script>
