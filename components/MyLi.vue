<template>
  <li class="text-center">
    <div class="icon-box flex justify-center align-center w-16 h-16 p-3 rounded-full mb-11 mx-auto">
      <img :src="advantage.icon" alt="" />
    </div>
    <div class="li-title mb-6 text-lg font-semibold  text-white">{{ advantage.title }}</div>
    <div class="li-content text-sm font-normal  leading-6">{{ advantage.content }}</div>
  </li>
</template>
<script>
export default {
  name: "MyLi",
  props: ['advantage']
};
</script>
<style lang="scss" scoped>
.icon-box {
  background-color: #595959;
}
.li-title {
  font-family: MicrosoftYaHei-Bold;
}

.li-content {
  font-family: MicrosoftYaHei;
  color: #cccccc;
}
</style>
