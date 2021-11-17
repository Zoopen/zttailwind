<template>
  <a
    class="
      more-case-btn
      mx-auto
      mb-11
      flex
      items-center
      w-48
      h-12
      px-6
      rounded-3xl
      text-sm
    "
    :href="url"
    >更多成功案例
    <img src="~/static/images/right_gray.png" alt="" class="default-btn ml-5" />
    <img src="~/static/images/right_white.png" alt="" class="active-btn ml-5" />
  </a>
</template>
<script>
export default {
  name: "MyButton",
  props: ["url"],
};
</script>
<style lang="scss" scoped>
a.more-case-btn {
  background-color: #f0f0f0;
  font-family: MicrosoftYaHei;
  color: #333333;
  transition: all 0.3s;

  img {
    &.active-btn {
      display: none;
    }
  }

  &:hover {
    background-color: #9a1e23;
    color: #fff;
    img {
      &.default-btn {
        display: none;
      }
      &.active-btn {
        display: block;
      }
    }
  }
}
</style>
