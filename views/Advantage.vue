<template>
  <section class="services-advantage">
    <!-- 服务优势 -->
    <div class="container mx-auto max-w-screen-xl">
      <my-title
        main-title="中天华夏服务优势"
        sub-title="目前已成为众多世界500强企业的合作伙伴"
        color="#fff"
      ></my-title>
      <ul class="grid grid-cols-5 gap-14">
        <my-li
          v-for="(advantage, index) in advantages"
          :key="index"
          :advantage="advantage"
        ></my-li>
      </ul>
      <ul class="additional-box absolute -bottom-16 left-1/2 transform -translate-x-1/2 grid grid-cols-4 py-8 rounded-xl">
        <li>
          <p>20+</p>
          <div>涵盖行业</div>
        </li>
        <li>
          <p>30+</p>
          <div>世界500强合作伙伴</div>
        </li>
        <li>
          <p>500+</p>
          <div>咨询与培训项目成功案例</div>
        </li>
        <li>
          <p>500+</p>
          <div>服务企业</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import MyLi from "../components/MyLi.vue";
import MyTitle from "../components/MyTitle.vue";
export default {
  components: { MyTitle, MyLi },
  data() {
    return {
      advantages: [
        {
          icon: require("~/static/images/advantage01.png"),
          title: `资质与方法`,
          content: `严谨、系统的咨询管理体系。国际注册管理咨询CMC。`,
        },
        {
          icon: require("~/static/images/advantage02.png"),
          title: `变革管理`,
          content: `充分调研及“松土”，系统的变革管理最大限度调动积极性，保障变革成功变革管理工具，辅助提升咨询效率。`,
        },
        {
          icon: require("~/static/images/advantage03.png"),
          title: `节奏把握`,
          content: `整体规划、分步实施。量体裁衣、步步为营、稳步推进。切实可行的计划、定期报告。`,
        },
        {
          icon: require("~/static/images/advantage04.png"),
          title: `质量保证`,
          content: `业界首创，为咨询项目设置独立质量保证（QA）管理角色保障项目规范、高质量推进。`,
        },
        {
          icon: require("~/static/images/advantage05.png"),
          title: `量化可视`,
          content: `业界领先的体系成熟度量化评估模型分摸块评审与阶段验收。审慎的试运行、推广与长期辅导。`,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
//服务优势
.services-advantage {
  overflow: unset;
  height: 545px;
  background-color: #373737;
  background: url(~/static/images/advantage_bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;

  .additional-box {
    width: 964px;
    height: 126px;
    background-color: #a51c30;

    li {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        margin-bottom: unset;
        font-family: MicrosoftYaHei-Bold;
        font-size: 40px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: 0px;
        color: #ffffff;
      }

      div {
        font-family: MicrosoftYaHei;
        font-size: 18px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #ffffff;
      }
    }
  }
}
</style>
