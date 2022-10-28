<template>
  <div class="navbar-container">
    <div class="navbar-links">
      <NuxtLink class="navbar-brand navbar-item" to="/">
        <strong>MEET_APP</strong>
      </NuxtLink>
      <NuxtLink class="navbar-item" to="/dashboard"> Zoek activiteit </NuxtLink>
      <NuxtLink class="navbar-item" to="/dashboard">
        Plaats activiteit
      </NuxtLink>
      <div class="buttons">
        <NuxtLink class="button navbar-item is-dark" to="/login">
          <strong>Inschrijven</strong>
        </NuxtLink>
        <NuxtLink class="button navbar-item" to="/login"> Aanmelden </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
.navbar-container {
  width: stretch;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--is-light);
}

.navbar-brand {
  float: left;
  padding: 16px;
}

.navbar-links {
  width: 100%;
  clear: both;
  display: table;
}

.navbar-item {
  color: black;
  text-decoration: none;
}

.navbar-item:not(.navbar-brand) {
  margin: 10px 4vw 10px 4vw;
  padding: 0.75em;
}

.navbar-item:hover:not(.navbar-brand, .button) {
  background-color: var(--is-light);
  border-bottom: 3px solid var(--is-dark);
}

.navbar-item.router-link-active:not(.navbar-brand, .button) {
  border-bottom: 3px solid var(--is-dark);
}

.buttons {
  float: right;
}
.button {
  background-color: var(--is-dark);
  color: white;
  padding: 15px 32px;
  display: inline-block;
}
</style>
