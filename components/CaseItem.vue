<template>
  <div class="case-item w-full h-full text-center">
    <div class="case-img-box mb-4 overflow-hidden relative">
      <img :src="item.img" alt="" class="w-full h-full" />
      <div class="case-mask absolute left-0 w-full h-full flex justify-center items-center">
        <img :src="item.logo" alt="" class="case-logo object-contain" />
      </div>
    </div>
    <div class="case-name text-sm">{{ item.title }}</div>
  </div>
</template>
<script>
export default {
  name: "CaseItem",
  props: ["item"],
};
</script>
<style lang="scss" scoped>
.case-item {
  &:hover {
    .case-name {
      color: #881c30;
    }

    .case-img-box {
      .case-mask {
        top: 0;
      }
    }
  }

  .case-img-box {
    .case-mask {
      top: -100%;
      background-color: rgba(165, 28, 48, 0.7);
      transition: all 0.3s;

      .case-logo {
        width: 100px;
      }
    }
  }

  .case-name {
    font-family: MicrosoftYaHei;
    color: #333333;
  }
}
</style>
