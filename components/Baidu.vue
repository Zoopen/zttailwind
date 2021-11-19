<template>
  <div v-if="false">百度工具</div>
</template>
<script>
export default {
  name: "baidu",
  mounted() {
    //百度统计
    var _hmt = _hmt || [];
    (function () {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?35b200907c2b45309517b13dea2a12b5 ";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();

    // 百度推送
    (function () {
      var bp = document.createElement("script");
      var curProtocol = window.location.protocol.split(":")[0];
      if (curProtocol === "https") {
        bp.src = "https://zz.bdstatic.com/linksubmit/push.js";
      } else {
        bp.src = "http://push.zhanzhang.baidu.com/push.js";
      }
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(bp, s);
    })();
  },
};
</script>
