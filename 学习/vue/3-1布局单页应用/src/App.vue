<template>
  <div id="app">
    <My-Header></My-Header>
     <div class="container">
       <div class="content">
      <p>格莱信息科技有限公司，专注于为企业提供网络系统服务、软件外包、电子商务、信息化咨询服务、互联网人才外包服务等互联网综合解决方案的高科技互联网企业。系redhat河南地区唯一授权“红帽学院推广中心” 。</p>
<p>为助力我国互联网人才培养，现致力于面向全国高校、职业院校进行产、学、研校企深度合作。凭借公司深厚的行业背景，与院校深度结合，形成全新的互联网教育体系和科研体系。现与信阳职业技术学院、开封文化艺术职业学院、鹤壁职业技术学院、三门峡职业技术学院、南阳农业职业学院、驻马店职业技术学院、濮阳职业技术学院等多家高校达成合作，共建校企合作专业。该体系致力于打通人才供应端和人才需求端，培养出一系列适应市场要求的创新型、实用型互联网人才，以满足社会需求。</p>
      </div>
     </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
*{padding: 0;margin: 0}
body{font:14px "Microsoft Yahei";color: #333;background-color: #efefef;position: relative}
ul,li{list-style: none}
a{text-decoration: none;color: #fff}
.container{width: 1000px;margin: 0 auto;overflow: hidden}
.content{padding: 20px 0;line-height: 2;text-indent: 2em}
</style>
