<template>
<!-- 右下角QQ客服 -->
  <div class="livechat-girl animated" @mouseenter="enter" @mouseleave="leave">
    <a
      target="_blank"
      href="http://wpa.qq.com/msgrd?v=3&uin=2622447485&site=qq&menu=yes"
    >
      <img class="girl" src="~/static/webimages/en_3.png" />
    </a>
    <div
      class="
        livechat-hint
        rd-notice-tooltip rd-notice-type-success rd-notice-position-left
        single-line
      "
      :class="{ show_hint: show_hint, hide_hint: !show_hint }"
    >
      <div class="rd-notice-content">嘿，我来帮您！</div>
    </div>
    <div class="animated-circles" :class="{ animated: animated }">
      <div class="circle c-1"></div>
      <div class="circle c-2"></div>
      <div class="circle c-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animated: false,
      show_hint: true,
    };
  },
  methods: {
    enter() {
      clearInterval(this.wait);
      this.show_hint = false;
    },
    leave() {
      this.show_hint = true;
    },
  },
  mounted() {
    setInterval(() => {
      this.animated = !this.animated;
    }, 2000);

    this.wait = setInterval(() => {
      this.show_hint = false;
      clearInterval(this.wait);
    }, 3500);
  },
};
</script>
<style lang="scss">
@import "~/static/css/qqkf.css";
</style>
