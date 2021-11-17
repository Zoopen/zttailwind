<template>
  <div>
    <banner></banner>
    <ourservice></ourservice>
    <advantage></advantage>
    <successfulcase></successfulcase>
    <evaluation></evaluation>
    <openclass></openclass>
    <news></news>
  </div>
</template>

<script>
import Banner from "../views/Banner.vue";
import Ourservice from "../views/Ourservice.vue";
import Advantage from "../views/Advantage.vue";
import Successfulcase from "../views/Successfulcase.vue";
import Evaluation from "../views/Evaluation.vue";
import Openclass from "../views/Openclass.vue";
import News from "../views/News.vue";
export default {
  components: {
    Banner,
    Ourservice,
    Advantage,
    Successfulcase,
    Evaluation,
    Openclass,
    News,
  },
};
</script>

<style lang="scss">
@mixin no-select() {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
body {
  @include no-select;
}
</style>
