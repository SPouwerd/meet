<script setup>
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
</script>
<template>
  <div class="surface-card p-1 shadow-1 border-round">
    <div class="card">
      <TabView :activeIndex="currentStep">
        <TabPanel header="Account" disabled>
          <UserRegisterForm />
        </TabPanel>
        <TabPanel header="Voorkeuren" disabled>
          <UserPreferences />
        </TabPanel>
        <TabPanel header="Profiel" disabled>
          <UserProfile />
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      currentStep: 0,
    }
  },
  methods: {
    makeStep(n) {
      this.currentStep += n
      console.log(this.currentStep)
    },
  },
}
</script>
