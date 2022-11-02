<script setup>
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
</script>

<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <NuxtLink to="/">
          <img alt="MEET_APP" height="40" class="mr-2" />
        </NuxtLink>
      </template>
      <template #end>
        <NuxtLink to="/register" class="nuxt-link-active">
          <Button label="Registeren" />
        </NuxtLink>
        <NuxtLink to="/login" class="nuxt-link-active">
          <Button label="Aanmelden" />
        </NuxtLink>
      </template>
    </Menubar>

    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: 'Deelnemen',
          to: '/find',
        },
        {
          label: 'Organiseren',
          to: '/host',
        },
      ],
    }
  },
}
</script>

<style lang="css">
body {
  background-color: var(--soft-white);
  margin: 0px;
}
body > :first-child {
  padding-top: 42px;
}

.p-menubar .nuxt-link-active {
  color: var(--soft-white);
  text-decoration: none;
}
.p-menubar {
  background-color: var(--blue);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border: none;
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0px 2px 16px;
}
.p-menuitem-text {
  color: var(--soft-white) !important;
}
.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:focus {
  box-shadow: none !important;
}
.p-menubar .p-menuitem > .p-menuitem-link:hover {
  background-color: var(--blue) !important;
}
</style>
