<template>
  <div class="container mx-auto max-w-screen-xl flex">
    <h1 class="logo flex-none">
      <a href="/index.html" title="中天华夏研发管理咨询"
        ><img src="/webimages/zlogo.png" alt="中天华夏研发管理咨询"
      /></a>
    </h1>
    <nav class="flex-grow">
      <ul class="flex">
        <li
          v-for="(item, index) in lis"
          :key="index"
          @mouseenter="enter"
          @mouseleave="leave"
        >
          <h3>
            <a :href="item.href">
              <span class="cn">{{ item.cn }}</span>
              <span class="en">{{ item.em }}</span>
            </a>
          </h3>
        </li>
      </ul>
    </nav>
    <div class="search flex-none">
      <a href="/search.html?keyword=" class="searchInco">搜索</a>
      <div class="Searchbox" style="display: none">
        <input
          type="text"
          class="searchText"
          onkeypress="return(clickButton());"
        />
        <input type="button" class="searchBtn" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheHeader",
  data() {
    return {
      lis: [
        {
          href: "/index.html",
          cn: "首页",
          en: "HOME",
          downMenu: [],
        },
        {
          href: "/consulting/index.html",
          cn: "研发管理咨询",
          en: "CONSULTING",
          downMenuClass: "widthOne",
          downMenu: [
            [
              {
                name: "产品研发管理体系建设(IPD体系)",
                url: "/consulting/index.html",
                dt: true,
              },
              {
                name: "产品战略规划咨询",
                url: "/consulting/Protec/CPZY/index.html",
                dt: true,
              },
              {
                name: "产品研发关键人才培养",
                url: "/training/index.html",
                dt: true,
              },
            ],
            [
              {
                name: "产品创新管理体系",
                url: "",
                dt: true,
              },
              {
                dt: false,
                dds: [
                  {
                    name: "产品战略与规划流程",
                    url: "/consulting/Protec/CPZY/index.html",
                  },
                  {
                    name: "产品开发流程",
                    url: "/consulting/Protec/CPKF/index.html",
                  },
                  {
                    name: "需求管理（OR）",
                    url: "/consulting/Protec/OR/index.html",
                  },
                  {
                    name: "任务书开发子流程",
                    url: "/consulting/Protec/RW/index.html",
                  },
                ],
              },
            ],
            [
              {
                name: "技术创新管理体系",
                url: "",
                dt: true,
              },
              {
                dt: false,
                dds: [
                  {
                    name: "技术与平台规划",
                    url: "/consulting/Protec/PTGH/index.html",
                  },
                  {
                    name: "技术与平台开发（含预研）",
                    url: "/consulting/Protec/PTKF/index.html",
                  },
                ],
              },
            ],
            [
              {
                name: "支撑与使能流程",
                url: "",
                dt: true,
              },
              {
                dt: false,
                dds: [
                  {
                    name: "决策管理",
                    url: "/consulting/Protec/JCGL/index.html",
                  },
                  {
                    name: "技术评审",
                    url: "/consulting/Protec/JSPS/index.html",
                  },
                  {
                    name: "产品设计开发",
                    url: "/consulting/Protec/KFZ/index.html",
                  },
                  {
                    name: "（多）项目管理",
                    url: "/consulting/Protec/DXM/index.html",
                  },
                  {
                    name: "产品质量保证",
                    url: "/consulting/Protec/YFZL/index.html",
                  },
                  {
                    name: "研发财务管理",
                    url: "/consulting/Protec/YFCW/index.html",
                  },
                  {
                    name: "产品测试",
                    url: "/consulting/Protec/CPCS/index.html",
                  },
                ],
              },
            ],
            [
              {
                name: "研发人力资源管理体系",
                url: "",
                dt: true,
              },
              {
                dt: false,
                dds: [
                  {
                    name: "研发组织设计",
                    url: "/consulting/deve/ZZdeve/index.html",
                  },
                  {
                    name: "研发任职资格体系",
                    url: "/consulting/deve/RZdeve/index.html",
                  },
                  {
                    name: "研发职业发展通道",
                    url: "/consulting/deve/RZdeve/index.html",
                  },
                  {
                    name: "研发绩效管理体系",
                    url: "/consulting/deve/JXdeve/index.html",
                  },
                  {
                    name: "研发薪酬与激励制度",
                    url: "/consulting/deve/XCdeve/index.html",
                  },
                  {
                    name: "研发关键人才培养",
                    url: "/consulting/deve/RCdeve/index.html",
                  },
                ],
              },
            ],
          ],
        },
        {
          href: "/training/index.html",
          cn: "关键人才培养",
          en: "TRAINING",
          downMenuClass: "widthTwo",
          downMenu: [
            [
              {
                name: "课程体系",
                url: "/training/culum/index.html",
                dt: true,
              },
              {
                dt: false,
                dds: [
                  {
                    name: "直播课程",
                    url: "/training/culum/index.html?id=12556",
                  },
                  {
                    name: "线上课程",
                    url: "/training/culum/index.html?id=12548",
                  },
                  {
                    name: "产品设计及其他类",
                    url: "/training/culum/index.html?id=127",
                  },
                  {
                    name: "研发质量与测试管理类",
                    url: "/training/culum/index.html?id=126",
                  },
                  {
                    name: "研发人力资源管理类",
                    url: "/training/culum/index.html?id=125",
                  },
                  {
                    name: "研发项目管理类",
                    url: "/training/culum/index.html?id=124",
                  },
                  {
                    name: "产品管理类",
                    url: "/training/culum/index.html?id=123",
                  },
                  {
                    name: "研发综合管理技能类",
                    url: "/training/culum/index.html?id=122",
                  },
                  {
                    name: "研发管理体系",
                    url: "/training/culum/index.html?id=121",
                  },
                ],
              },
            ],
            [
              {
                name: "研发管理核心人才",
                url: "/training/Pmanager/index.html",
                dt: true,
              },
              {
                dt: false,
                dds: [
                  {
                    name: "产品经理",
                    url: "/training/Pmanager/index.html",
                  },
                  {
                    name: "项目经理",
                    url: "/training/project/index.html",
                  },
                  {
                    name: "更多核心人才",
                    url: "/training/talents/index.html",
                  },
                ],
              },
            ],
            [
              {
                name: "热门课程",
                url: "/training/yuyue/index.html",
                dt: true,
              },
              {
                dt: false,
                dds: [
                  {
                    name: "IPD集成产品开发体系精讲",
                    url: "/training/culum/2982.html",
                  },
                  {
                    name: "华为项目经理的晋级之道 ——研发项目管理高级实战",
                    url: "/training/culum/12557.html",
                  },
                  {
                    name: "赢在源头 ——成功的产品经理高级实务",
                    url: "/training/culum/1147.html",
                  },
                  {
                    name: "华为保持技术领先的秘诀 ——技术创新管理（预研、平台与CBB）",
                    url: "/training/culum/1274.html",
                  },
                  {
                    name: "华为产品持续成功的DNA ——产品战略规划全景沙盘实战",
                    url: "/training/culum/14551.html",
                  },
                  {
                    name: "产品经理必修课：如何洞察市场与需求的方法、工具与技巧",
                    url: "/training/culum/12559.html",
                  },
                  {
                    name: "研发项目管理高级实战",
                    url: "/training/culum/11547.html",
                  },
                ],
              },
            ],
          ],
        },
        {
          href: "/training/index.html",
          cn: "成功案例",
          en: "CASE",
          downMenuClass: "",
          shortNav: "shortNav",
          downMenu: [
            {
              name: "咨询案例",
              url: "/case/Consul/index.html",
            },
            {
              name: "人才培养案例",
              url: "/case/elec/index.html",
            },
            {
              name: "服务客户",
              url: "/case/fuwu/index.html",
            },
            {
              name: "业务动态",
              url: "/case/NewCase/index.html",
            },
            {
              name: "客户评价",
              url: "/case/evaluation/index.html",
            },
          ],
        },
        {
          href: "/Team/index.html",
          cn: "专家团队",
          en: "TEAM",
          downMenu: [],
        },
        {
          href: "/Customer/Download/index.html",
          cn: "创新与研发",
          en: "INNOVATION",
          downMenuClass: "widthThree",
          shortNav: "shortNav",
          downMenu: [
            {
              name: "专业期刊",
              url: "/Customer/Download/index.html",
            },
            {
              name: "专家文章",
              url: "/Customer/article/index.html",
            },
            {
              name: "推荐书籍",
              url: "/Customer/books/index.html",
            },
            {
              name: "Q&A",
              url: "/Customer/QA/index.html",
            },
          ],
        },
        {
          href: "/about/Company/index.html",
          cn: "关于我们",
          en: "ABOUT",
          downMenuClass: "",
          shortNav: "shortNav",
          downMenu: [
            {
              name: "公司介绍",
              url: "/about/Company/index.html",
            },
            {
              name: "联系我们",
              url: "/about/Culture/index.html",
            },
            {
              name: "实力见证",
              url: "/about/Awards/index.html",
            },
            {
              name: "加入我们",
              url: "/about/Join/index.html",
            },
          ],
        },
      ],
    };
  },
  methods: {
    enter() {},
    leave() {},
  },
  mounted() {
    // $(".nav li").hover(
    //   function () {
    //     $(this).find(".downMenu").stop(true, true).slideDown(400);
    //   },
    //   function () {
    //     $(this).find(".downMenu").stop(true, true).hide();
    //   }
    // );
    // $(".nav li").each(function (index, element) {
    //   $(this).find(".downMenu dl:last").css("border-right", "none");
    //   var height = $(this).find(".downMenu").height();
    //   $(this).find(".downMenu dl").css("height", height);
    // });
  },
};
</script>
<style lang="scss">
.logo {
  margin-right: 125px;
}
nav {
  color: #555;
  font-family: "Microsoft Yahei";
  li {
    &:hover {
      a {
        border-bottom-color: #b72e32;
        color: #b72e32;

        .en {
          display: block;
        }
      }
    }
    &.active {
      border-bottom-color: #b72e32;
      color: #b72e32;
      .cn {
        font-weight: bold;
      }
      .en {
        display: block;
      }
    }
    h3 {
      text-align: center;
      a {
        display: block;
        text-align: center;
        padding: 30px 15px 0;
        height: 80px;
        line-height: 80px;
        border-bottom: 3px solid #fff;
        span {
          display: block;
          line-height: 18px;
          &.cn {
            margin-bottom: 5px;
            font-size: 16px;
          }
          &.en {
            display: none;
            font-size: 12px;
          }
        }
      }
    }
  }
}
.search {
  float: right;
  width: 49px;
  font-size: 14px;
}
// .search a {
//   height: 80px;
//   width: 49px;
//   display: block;
//   background: url("~/static/webimages/search.png") right center no-repeat;
// }
// .Searchbox {
//   display: none;
//   position: absolute;
//   background: url(~/static/webimages/winco01.png) no-repeat;
//   width: 247px;
//   height: 65px;
//   right: -51px;
//   top: 34px;
//   z-index: 999;
// }
// .Searchbox .searchText {
//   width: 190px;
//   position: absolute;
//   left: 10px;
//   top: 30px;
// }
// .Searchbox .searchBtn {
//   width: 40px;
//   height: 35px;
//   cursor: pointer;
//   background: url(~/static/webimages/index_349.png) no-repeat center;
//   position: absolute;
//   right: 5px;
//   top: 23px;
// }

.indexweb {
  width: 1180px;
  margin: 0 auto;
}

.downMenu {
  width: 150px;
  padding: 30px 0 14px;
  position: absolute;
  left: 0;
  top: 83px;
  z-index: 999;
  border: 1px solid #e0e0e0;
  background: #fff;
  display: none;
}
.widthOne {
  width: 1168px;
  left: -345px;
  padding-bottom: 48px;
}
.widthTwo {
  width: 800px;
  left: -280px;
  padding-bottom: 48px;
}
.widthThree {
  width: 145px;
}
.downMenuList {
  width: 161px;
  padding: 0 23px;
  float: left;
  border-right: 1px solid #cdcdcd;
}
.widthOne .downMenuList {
  padding: 0 35px;
}
.widthTwo .downMenuList {
  width: 210px;
}
.downMenuList dt {
  margin-bottom: 21px;
}
.downMenuList dt a,
.downMenu .shortNav a {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  display: block;
}
.downMenuList dd a {
  color: #303030;
  display: block;
  margin-bottom: 4px;
  width: 210px;
  overflow: hidden;
  height: 24px;
}
.downMenuList dd a:hover,
downMenu .shortNav:hover {
  color: #c8101a;
}
.downMenu .shortNav {
  padding: 0 35px;
}
.downMenu .shortNav a {
  margin-bottom: 21px;
}
.zh-header {
  width: 100%;
  background: #fff;
}

.zh-header .search {
  position: relative;
  float: right;
  margin: 21px 0 0 0;

  .searchInco {
    display: block;
    width: 35px;
    background: url("~/static/webimages/topicon_08.png") no-repeat 0 0;
    padding-top: 35px;
    text-align: center;
    height: auto;
    &:hover {
      background: url("~/static/webimages/topicon_08s.png") no-repeat 0 0;
    }
  }
}
.zh-header .search .Searchbox {
  position: absolute;
}
.zh-header .login {
  float: right;
  margin: 21px 12px 0 0;
}
// .zh-header .login .login-handle {
//   display: block;
//   width: 45px;
//   background: url("~/static/webimages/topicon_06.png") no-repeat 0 0;
//   padding-top: 35px;
//   text-align: center;
// }
</style>
