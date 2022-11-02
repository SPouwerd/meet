<template>
  <div class="surface-card p-8 shadow-2 border-round">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <div v-else>
      <h1 v-if="error.message">{{ error.message }}</h1>
      <h2 v-if="error.statusCode">{{ error.statusCode }}</h2>
      <h2 v-if="error.response.data.message">
        {{ error.response.data.message }}
      </h2>
      <h4 v-if="error.response">{{ error.response }}</h4>
    </div>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  //  eslint-disable-next-line vue/require-prop-types
  props: ['error'],
}
</script>
