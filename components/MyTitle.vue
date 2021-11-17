<template>
  <div class="title-component">
    <div class="title-component--title" :style="{color: color}">{{ mainTitle }}</div>
    <div class="title-component--sub-title">{{ subTitle }}</div>
  </div>
</template>
<script>
export default {
  props: ["mainTitle", "subTitle","color"],
  name: "MyTitle",
};
</script>
<style lang="scss" scoped>
@mixin title-component() {
  .title-component {
    overflow: hidden;
    text-align: center;
    justify-content: center;

    .title-component--title {
      margin-top: 60px;
      margin-bottom: 20px;
      font-family: MicrosoftYaHei-Bold;
      font-size: 28px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #333333;
    }

    .title-component--sub-title {
      margin-bottom: 50px;
      font-family: MicrosoftYaHei;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #999999;
    }
  }
}

@include title-component;
</style>
