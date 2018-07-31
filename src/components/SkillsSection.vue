<template>
  <div
    id="skills"
    class="text-center">
    <div class="container">
      <div class="section-title center">
        <h2>Skills</h2>
        <hr>
      </div>
      <div class="row">

        <div class="col-md-3 col-sm-6 skill" v-for="(name,index) in programingNames" :key="index">
          <span
            class="chart"
            data-percent="95">
            <span class="percent">95</span>
          </span>
          <h4>{{ name }}</h4>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState({
      programing: state => state.skills.Programming
    }),
    ...mapGetters("skills", {
      programingNames: "getProgramingNames"
    })
  }
};
</script>

<style scoped></style>
