<template>
  <section class="customer-evaluation">
    <!-- 客户见证 -->
    <div class="container mx-auto max-w-screen-xl">
      <my-title
        main-title="客户见证"
        sub-title="提升企业核心竞争力，为客户持续创造价值"
      ></my-title>
      <div class="customer-swiper-box">
        <swiper
          ref="mySwiper"
          :options="swiperOptions"
          class="index-customer-swiper"
        >
          <swiper-slide v-for="(slide, index) in formatData" :key="index">
            <div class="w-full grid grid-cols-2 grid-rows-2 gap-5">
              <div
                class="flex bg-white"
                v-for="(evaluation, index) in slide"
                :key="index"
              >
                <div
                  class="icon-left flex justify-center items-center bg-white"
                >
                  {{ evaluation.name }}
                </div>
                <div class="content-right p-5 flex-1">
                  {{ evaluation.comment }}
                  <p class="text-right">{{ evaluation.who }}</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <!-- 如果需要导航按钮 -->
        <div class="index-customer-prev" slot="button-prev" @click="prev">
          <img src="~/static/images/prev.png" alt="" />
        </div>
        <div class="index-customer-next" slot="button-next" @click="next">
          <img src="~/static/images/next.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      evaluations: [
        {
          name: "埃夫特",
          comment: `中天华夏服务团队所表现出来的专业精神以及对咨询事业的专注与情怀，深深打动了我们，是值得信赖的合作伙伴。顾问在工作中规划完整，实施有序，项目取得了良好效果。感谢中天华夏的专业指导带给我们的提升与改变！`,
          who: `埃夫特 CTO 游总`,
          logo: require("~/static/images/logo.png"),
        },
        {
          name: "地平线",
          comment: `IPD对整个公司意义重大，地平线是一家有强大技术优势的公司。提升市场竞争力需要流程的保证，IPD保证我们将技术优势转化成商业优势。短短两年，公司研发从几百人成长为1500 余人，如果没有IPD体系的支撑，这是不可想象的。`,
          who: `创始人 CEO 余总`,
          logo: require("~/static/images/logo.png"),
        },
        {
          name: "TCL",
          comment: `我们没有办法定在原地，只能往前走，向上跳，IPD是唯一适合我们进步的台阶。IPD新的流程变革，是在我们过往流程上的一个大升级，我们已经具备了一定的基础，但我们过去往往是段到段，而非端到端，对我们产品的商业成功缺乏流程上的保障。`,
          who: `CEO 王总`,
          logo: require("~/static/images/logo.png"),
        },
        {
          name: "无限极",
          comment: `中天华夏在研发管理方面做得非常优秀的咨询公司，既有很好的原则性，也有非常好的灵活性，能将IPD的思想、理念、贯彻与我们公司的实际相结合，能让管理理念和流程有效落地。2013年至今，经双方的高效合作和不懈努力，公司从全行业第三名跃升为行业第一。`,
          who: `高级总监 唐总`,
          logo: require("~/static/images/logo.png"),
        },
        {
          name: "测试数据",
          comment: `测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据`,
          who: `测试数据`,
          logo: require("~/static/images/logo.png"),
        },
        {
          name: "测试数据",
          comment: `测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据`,
          who: `测试数据`,
          logo: require("~/static/images/logo.png"),
        },
        {
          name: "测试数据",
          comment: `测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据`,
          who: `测试数据`,
          logo: require("~/static/images/logo.png"),
        },
      ],
      swiperOptions: {
        loop: true, // 循环模式选项
        autoplay: {
          disableOnInteraction: false, //手动操作后不会自动轮播问题解决
          delay: 3000, //5秒切换一次
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        navigation: {
          nextEl: ".index-customer-next",
          prevEl: ".index-customer-prev",
        },
      },
    };
  },
  computed: {
    formatData() {
      var a = this.evaluations;
      var b = [];
      var result = [];
      var k = 0;

      for (var i = 0; i < a.length; ++i) {
        if (i % 4 == 0) {
          b = [];
          for (var j = 0; j < 4; ++j) {
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
<style lang="scss">
//客户见证
.customer-evaluation {
  background-color: #f8f8f8;
  padding-bottom: 70px;

  .customer-swiper-box {
    position: relative;
  }

  .index-customer-next {
    position: absolute;
    top: 50%;
    right: -88px;
    width: 38px;
    transform: translateY(-50%);
    z-index: 2;
  }

  .index-customer-prev {
    position: absolute;
    top: 50%;
    left: -88px;
    width: 38px;
    transform: translateY(-50%);
    z-index: 2;
  }

  .icon-left {
    width: 180px;
    height: 161px;
  }

  .content-right {
    width: 410px;
    height: 161px;
    font-size: 13px;
    background-color: #ebebeb;
  }
}
</style>
