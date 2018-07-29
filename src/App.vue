<template>
  <div id="app">
    <NavigationSection/>
    <router-view/>
    <FooterSection/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationSection from '@/components/NavigationSection.vue'
import FooterSection from '@/components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    NavigationSection,
    FooterSection,
  },
}
</script>

<style></style>
