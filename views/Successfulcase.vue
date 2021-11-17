<template>
  <section class="successful-case pt-16">
    <!-- 成功案例 -->
    <div class="w-full">
      <my-title
        main-title="成功案例"
        sub-title="成为赋能企业变革的管理咨询卓越品牌"
      ></my-title>
      <div class="grid grid-cols-5 gap-y-7 mb-12">
          <case-item v-for="(item, index) in cases" :key="index" :item="item"></case-item>
      </div>
      <my-button :url="url"></my-button>
    </div>
  </section>
</template>
<script>
import CaseItem from '../components/CaseItem.vue';
import MyButton from '../components/MyButton.vue';
export default {
  components: {CaseItem, MyButton},
  data() {
    return {
      url: 'javascript:;',
      cases: [
        {
          img: require("~/static/images/1.jpg"),
          logo: require("~/static/images/logo.png"),
          title: `李锦记研发管理体系咨询项目`,
        },
        {
          img: require("~/static/images/1.jpg"),
          logo: require("~/static/images/logo.png"),
          title: `李锦记研发管理体系咨询项目`,
        },
        {
          img: require("~/static/images/1.jpg"),
          logo: require("~/static/images/logo.png"),
          title: `李锦记研发管理体系咨询项目`,
        },
        {
          img: require("~/static/images/1.jpg"),
          logo: require("~/static/images/logo.png"),
          title: `李锦记研发管理体系咨询项目`,
        },
        {
          img: require("~/static/images/1.jpg"),
          logo: require("~/static/images/logo.png"),
          title: `李锦记研发管理体系咨询项目`,
        },
        {
          img: require("~/static/images/1.jpg"),
          logo: require("~/static/images/logo.png"),
          title: `李锦记研发管理体系咨询项目`,
        },
        {
          img: require("~/static/images/1.jpg"),
          logo: require("~/static/images/logo.png"),
          title: `李锦记研发管理体系咨询项目`,
        },
        {
          img: require("~/static/images/1.jpg"),
          logo: require("~/static/images/logo.png"),
          title: `李锦记研发管理体系咨询项目`,
        },
        {
          img: require("~/static/images/1.jpg"),
          logo: require("~/static/images/logo.png"),
          title: `李锦记研发管理体系咨询项目`,
        },
        {
          img: require("~/static/images/1.jpg"),
          logo: require("~/static/images/logo.png"),
          title: `李锦记研发管理体系咨询项目`,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
//成功案例
.successful-case {
  background-color: #ffffff;
}
</style>
