<template>
  <section class="services">
    <!-- 我们的服务 -->
    <div class="container mx-auto max-w-screen-xl">
      <my-title
        main-title="我们的服务"
        sub-title="始终专注于产品创新与研发管理咨询领域，专业是我们的关键核心竞争力"
      ></my-title>
      <div class="grid grid-cols-3 gap-10 items-end">
        <card
          v-for="(service, index) in services"
          :key="index"
          :service="service"
        ></card>
      </div>
    </div>
  </section>
</template>
<script>
import Card from "../components/Card.vue";
import MyTitle from "../components/MyTitle.vue";
export default {
  components: { MyTitle, Card },
  data() {
    return {
      services: [
        {
          icon: require("~/static/images/service01.png"),
          title: `产品战略规划咨询`,
          content: `中天华夏咨询基于著名的业务领先模型(BLM)(华为、IBM等世界500强企业广泛采用并获得成功），借助世界500强背景的资深顾问团队，深入指导产品战略制定的全过程，提升产品的市场竞争力，输出完善而富有竞争力的产品战略规划方案。`,
          img: require("~/static/images/service_01.jpg"),
          borderColor: "#d3a857",
        },
        {
          icon: require("~/static/images/service02.png"),
          title: `产品研发管理体系建设（IPD）`,
          content: `通过IPD体系构建，建立从市场机会到商业成功的系统管理能力。借助以投资为导向的决策机制、跨部门团队运作、产品与技术开发相分离的异步开发模式，以及面向市场的结构化开发流程等要素，提升产品创新效率，实现市场成功`,
          img: require("~/static/images/service_02.jpg"),
          borderColor: "#881c30",
        },
        {
          icon: require("~/static/images/service03.png"),
          title: `产品研发关键人才培养`,
          content: `中天华夏咨询基于著名的业务领先模型(BLM)(华为、IBM等世界500强企业广泛采用并获得成功），借助世界500强背景的资深顾问团队，深入指导产品战略制定的全过程，提升产品的市场竞争力，输出完善而富有竞争力的产品战略规划方案。`,
          img: require("~/static/images/service_03.jpg"),
          borderColor: "#373737",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
// 服务
.services {
  background-color: #f8f8f8;
}
</style>
