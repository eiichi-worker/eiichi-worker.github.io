<template>
  <div class="home">
    <!-- About Section -->
    <AboutSection />

    <!-- Skills Section -->
    <SkillsSection />

    <!-- Portfolio Section -->
    <PortfolioSection />
    <!-- Achievements Section -->
    <AchievementsSection />

    <!-- Resume Section -->
    <ResumeSection />

    <!-- Contact Section -->
    <ContactSection />

  </div>
</template>

<script>
// @ is an alias to /src
import AboutSection from '@/components/AboutSection.vue'
import AchievementsSection from '@/components/AchievementsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import ResumeSection from '@/components/ResumeSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'

export default {
  name: 'Home',
  components: {
    AboutSection,
    AchievementsSection,
    ContactSection,
    PortfolioSection,
    ResumeSection,
    SkillsSection,
  },
}
</script>
