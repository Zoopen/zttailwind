<template>
  <section class="public-class">
    <!-- 近期公开课 -->
    <div class="container mx-auto max-w-screen-xl">
      <my-title
        main-title="近期公开课"
        sub-title="让每一个业务单元都成为有效增长的发动机"
      ></my-title>
      <div class="class-info">
        <swiper
          ref="mySwiper"
          :options="swiperOptions"
          class="index-class-swiper"
        >
          <swiper-slide v-for="(slide, i) in formatData" :key="i">
            <ul class="grid grid-cols-3 gap-x-8">
              <li
                v-for="(course, index) in slide"
                :key="index"
                class="relative"
              >
                <img :src="course.cover" alt="" class="w-full" />
                <div class="info-box py-4 px-3">
                  <div class="class-name mb-3.5 text-sm font-semibold">
                    {{ course.name }}
                  </div>
                  <div class="other-info flex justify-between pt-4">
                    <div class="start-time flex items-center">
                      <img :src="aclock" alt="" class="icon object-contain" />
                      开课时间：<span>{{ course.start_time }}</span>
                    </div>
                    <div class="address flex items-center">
                      <img :src="pos" alt="" class="icon" />
                      地点：{{ course.pos }}
                    </div>
                  </div>
                </div>
                <div
                  class="
                    time-tag
                    absolute
                    top-0
                    left-0
                    flex
                    justify-center
                    items-center
                    text-white text-xs
                  "
                >
                  <div class="align-baseline">
                    <span>{{ course.month }}</span> 月
                  </div>
                </div>
              </li>
            </ul>
          </swiper-slide>
        </swiper>
        <!-- 如果需要导航按钮 -->
        <div class="class-info-switch-btn">
          <div
            :class="{ 'index-class-prev': true, active: currentIndex == 0 }"
            slot="button-prev"
            @click="prev"
          >
            <img
              src="~/static/images/left_gray.png"
              alt=""
              class="normal-btn"
            />
            <img
              src="~/static/images/left_white.png"
              alt=""
              class="active-btn"
            />
          </div>
          <div
            :class="{ 'index-class-next': true, active: currentIndex == 1 }"
            slot="button-next"
            @click="next"
          >
            <img
              src="~/static/images/right_gray.png"
              alt=""
              class="normal-btn"
            />
            <img
              src="~/static/images/right_white.png"
              alt=""
              class="active-btn"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import MyTitle from "../components/MyTitle.vue";
export default {
  components: { MyTitle },
  data() {
    return {
      currentIndex: 0,
      aclock: require("~/static/images/aclock.png"),
      pos: require("~/static/images/pos_dark.png"),
      classes: [
        {
          name: "技术创新管理（平台、技术与重用）", //线下公开课名称
          cover: require("~/static/images/1.jpg"), //线下公开课封面
          start_time: "2021年3月26日-27日", //线下公开课时间
          pos: "深圳", //线下公开课地点
          month: 3, //线下公开课月份
        },
        {
          name: "技术创新管理（平台、技术与重用）", //线下公开课名称
          cover: require("~/static/images/1.jpg"), //线下公开课封面
          start_time: "2021年3月26日-27日", //线下公开课时间
          pos: "深圳", //线下公开课地点
          month: 3, //线下公开课月份
        },
        {
          name: "技术创新管理（平台、技术与重用）", //线下公开课名称
          cover: require("~/static/images/1.jpg"), //线下公开课封面
          start_time: "2021年3月26日-27日", //线下公开课时间
          pos: "深圳", //线下公开课地点
          month: 3, //线下公开课月份
        },
        {
          name: "自行车自行车自行车自行车自行车", //线下公开课名称
          cover: require("~/static/images/1.jpg"), //线下公开课封面
          start_time: "2021年3月26日-27日", //线下公开课时间
          pos: "深圳", //线下公开课地点
          month: 3, //线下公开课月份
        },
        {
          name: "自行车自行车自行车自行车自行车", //线下公开课名称
          cover: require("~/static/images/1.jpg"), //线下公开课封面
          start_time: "2021年3月26日-27日", //线下公开课时间
          pos: "深圳", //线下公开课地点
          month: 3, //线下公开课月份
        },
        {
          name: "自行车自行车自行车自行车自行车", //线下公开课名称
          cover: require("~/static/images/1.jpg"), //线下公开课封面
          start_time: "2021年3月26日-27日", //线下公开课时间
          pos: "深圳", //线下公开课地点
          month: 3, //线下公开课月份
        },
      ],
      swiperOptions: {
        loop: false, // 循环模式选项
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        navigation: {
          nextEl: ".index-class-next",
          prevEl: ".index-class-prev",
        },
        on: {
          slideChange: () => {
            let swiper = this.$refs.mySwiper.swiper;
            let i = swiper.realIndex;
            // this.$emit("currentIndex", i);
            this.currentIndex = i;
          },
          // click: function () {
          //   location.href = this.clickedSlide.dataset.url;
          // },
        },
      },
    };
  },
  computed: {
    formatData() {
      var a = this.classes;
      var b = [];
      var result = [];
      var k = 0;

      for (var i = 0; i < a.length; ++i) {
        if (i % 3 == 0) {
          b = [];
          for (var j = 0; j < 3; ++j) {
            if (a[i + j] == undefined) {
              continue;
            } else {
              b[j] = a[i + j];
            }
          }
          result[k] = b;
          k++;
        }
      }
      return result;
    },
  },
  methods: {
    prev() {
      this.$refs.mySwiper.swiper.slidePrev();
    },
    next() {
      this.$refs.mySwiper.swiper.slideNext();
    },
  },
};
</script>
<style lang="scss" scoped>
//近期公开课
.public-class {
  .index-class-swiper {
    overflow: hidden;
    margin-bottom: 50px;
  }

  .time-tag {
    width: 50px;
    height: 50px;
    background-color: #9a1e23;
    font-family: MicrosoftYaHei;
    span {
      font-size: 28px;
    }
  }

  .info-box {
    background-color: #f2f2f2;
  }

  .class-name {
    font-family: MicrosoftYaHei-Bold;
    color: #333333;
  }

  .other-info {
    font-family: MicrosoftYaHei;
    font-size: 13px;
    color: #333333;
    border-top: 1px solid #e5e5e5;

    .icon {
      width: 14px;
      margin-right: 6px;
    }

    .start-time {
      span {
        font-family: MicrosoftYaHei-Bold;
        font-size: 13px;
        color: #9a1e23;
      }
    }
  }

  .class-info-switch-btn {
    display: flex;
    width: 160px;
    height: 47px;
    margin: 0 auto;
    margin-bottom: 60px;
    border-radius: 10px;
    overflow: hidden;

    .index-class-prev,
    .index-class-next {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f0f0f0;
      transition: all 0.3s;

      .active-btn {
        display: none;
      }

      &:hover,
      &.active {
        background-color: #9a1e23;

        .normal-btn {
          display: none;
        }

        .active-btn {
          display: block;
        }
      }
    }

    .index-class-prev {
      img {
        transform: translateY(50%);
      }
    }

    .index-class-next {
      img {
        transform: translateY(-50%);
      }
    }
  }
}
</style>
