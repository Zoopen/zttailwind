<template>
  <section class="news">
    <!-- 最新资讯&联系我们 -->
    <div class="container mx-auto max-w-screen-xl">
      <my-title
        main-title="最新资讯"
        sub-title="关注中天华夏咨询，及时了解最新动态"
      ></my-title>
      <div class="news-content">
        <!-- 左侧新闻轮播图 -->
        <div class="index-news-swiper">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(slide, index) in newsData" :key="index">
              <img :src="slide.image" alt="" class="new-cover" />
            </swiper-slide>
          </swiper>
          <div class="news-swiper-info">
            <a class="news-swiper-info-desc" :href="newsData[currentIndex].url">
              <p class="news-title">
                {{ newsData[currentIndex].title }}
              </p>
              <p class="news-sub-title">
                {{ newsData[currentIndex].sub_title }}
              </p>
            </a>
            <div class="news-swiper-info-btns">
              <div class="index-news-prev" slot="button-prev" @click="prev">
                <img src="~/static/images/prev_white.png" alt="" />
              </div>
              <div class="index-news-next" slot="button-next" @click="next">
                <img src="~/static/images/next_white.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧新闻列表 -->
        <ul class="news-list grid grid-rows-3 gap-y-5">
          <li v-for="(anew, index) in news" :key="index" class="flex">
            <img :src="anew.img" alt="" class="w-40 object-cover object-center" />
            <div class="news-info flex-grow">
              <div class="new-title">{{ anew.title }}</div>
              <div class="time">{{ anew.time }}</div>
              <div class="news-detail">
                {{ anew.detail }}
              </div>
            </div>
          </li>
        </ul>
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
      newsData: [
        {
          image: require("~/static/images/1.jpg"),
          title: "华为保持技术领先的秘诀 ——《技术创新管理（预研、平台与CBB）》",
          sub_title:
            "3月26-27日，由中天华夏专家顾问祝勇老师主讲的《华为保持技术领先的秘诀",
          url: "javascript:;",
        },
        {
          image: require("~/static/images/2.jpg"),
          title: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
          sub_title:
            "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXASDASDASDASDZXCZXCZXCZXC",
          url: "javascript:;",
        },
        {
          image: require("~/static/images/3.jpg"),
          title: "333333333333333333",
          sub_title:
            "33333333333333333333333333333333333333333333333333333333333",
          url: "http://www.baidu.com",
        },
      ],
      news: [
        {
          title: "中天华夏与TCL电子达成战略合作",
          time: "2020-07-03",
          detail:
            " 随着AI、IoT、5G、云计算、大数据的趋势到来，越来越多的企业特别是手机厂商跨界进入智能家居领域。为了应对新的...",
          img: require("~/static/images/1.jpg"),
        },
        {
          title: "中天华夏与TCL电子达成战略合作",
          time: "2020-07-03",
          detail:
            " 随着AI、IoT、5G、云计算、大数据的趋势到来，越来越多的企业特别是手机厂商跨界进入智能家居领域。为了应对新的...",
          img: require("~/static/images/1.jpg"),
        },
        {
          title: "中天华夏与TCL电子达成战略合作",
          time: "2020-07-03",
          detail:
            " 随着AI、IoT、5G、云计算、大数据的趋势到来，越来越多的企业特别是手机厂商跨界进入智能家居领域。为了应对新的...",
          img: require("~/static/images/1.jpg"),
        },
      ],
      swiperOptions: {
        loop: true, // 循环模式选项
        initialSlide: 0,
        autoplay: {
          disableOnInteraction: false,
          delay: 5000, //5秒切换一次
        },
        navigation: {
          nextEl: ".index-news-next",
          prevEl: ".index-news-prev",
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
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

      newData: null,
    };
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
//最新资讯
.news {
  position: relative;
  background-color: #f8f8f8;

  .news-content {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 40px;
    margin-bottom: 60px;

    .index-news-swiper {
      widows: 100%;
      margin: unset;
      overflow: hidden;
      background-color: #881c30;
      color: #fff;
      position: relative;
      .swiper-container {
        height: 100%;
      }

      .new-cover {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      .news-swiper-info {
        z-index: 2;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        padding: 15px 20px;
        background-color: rgba(0, 0, 0, 0.5);

        .news-swiper-info-desc {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-right: 20px;
          color: #fff;

          p {
            flex: 1;
            margin: unset;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            word-break: break-all;
          }
        }

        .news-swiper-info-btns {
          width: 50px;
          display: flex;

          .index-news-prev,
          .index-news-next {
            flex: 1;
            position: relative;
            text-align: center;

            &::after {
              content: "";
              display: block;
              position: absolute;
              top: -5px;
              left: -5px;
              right: -5px;
              bottom: -5px;
            }
          }

          img {
            width: 12px;
            object-fit: contain;
          }
        }
      }
    }

    .news-list {
      li {
        background-color: #ebebeb;

        img {
          height: 120px;
          background-color: #881c30;
        }

        .news-info {
          padding: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .new-title {
            font-family: MicrosoftYaHei-Bold;
            font-size: 14px;
            font-weight: bold;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #333333;
          }

          .time {
            font-family: MicrosoftYaHei;
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #666666;
          }

          .news-detail {
            font-family: MicrosoftYaHei;
            font-size: 13px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #666666;
            line-height: 1.2;
          }
        }
      }
    }
  }
}
</style>
