<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide :key="banner" v-for="banner in banners" class="w-full">
      <img :src="banner" alt="" class="w-full object-contain" />
    </swiper-slide>
    <div
      class="swiper-pagination index-main-pagination"
      slot="pagination"
    ></div>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      banners: [
        require("~/static/images/1.jpg"),
        require("~/static/images/2.jpg"),
        require("~/static/images/3.jpg"),
      ],
      swiperOptions: {
        loop: true, // 循环模式选项
        autoplay: {
          disableOnInteraction: false, //手动操作后不会自动轮播问题解决
          delay: 3000, //5秒切换一次
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        pagination: {
          el: ".index-main-pagination",
          clickable: true,
          bulletClass: "index-main-bullet",
          bulletActiveClass: "index-main-bullet-active",
        },
      },
    };
  },
};
</script>
<style lang="scss">
$zt-red: #b72e23;
$zt-red2: #881c30;

.swiper-container {
  width: 100%;
  position: relative;
  
  .index-main-pagination {
    bottom: 30px;
  }

  .index-main-bullet {
    display: inline-block;
    width: 30px;
    height: 3px;
    margin-right: 10px;
    background-color: #fff;
    border-radius: 2px;

    &:last-child {
      margin-right: unset;
    }
  }

  .index-main-bullet-active {
    background: $zt-red2;
    opacity: 1;
  }
}
</style>
