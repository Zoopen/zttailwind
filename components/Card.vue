<template>
  <div
    class="bg-white px-5 pt-2.5 pb-5 border-t-10 rounded-tl-xl rounded-tr-xl"
    :style="{ borderColor: service.borderColor }"
  >
    <img :src="service.icon" alt="" class="block object-contain w-16 mt-10 mx-auto" />
    <p class="card-title my-7 text-center text-xl font-semibold leading-9 tracking-normal" :style="{ color: service.borderColor }">{{ service.title }}</p>
    <p class="card-content font-normal tracking-normal">{{ service.content }}</p>
    <img :src="service.img" alt="" class="main-img w-full object-contain mt-7" />
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["service"],
};
</script>
<style lang="scss" scoped>

.card-title {
  font-family: MicrosoftYaHei-Bold;
}

.card-content {
  font-family: MicrosoftYaHei;
  font-size: 13px;
  line-height: 22px;
  color: #666666;
}

</style>
