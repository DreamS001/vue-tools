//引入Vue
import Vue from 'vue'
//引入vue-router
import VueRouter from 'vue-router'
//使用Router
Vue.use(VueRouter)

//给VueRoute添加一个goBack方法，用于记录路由的前进后退状态 this.isBack = true
VueRouter.prototype.goBack = function () {
  this.isBack = true,
    window.history.go(-1)
}


//主页
import home from '../components/Home/home.vue'
//首页行业动态文章总列表组件
import IndustryDynamicsAll from '../components/Home/IndustryDynamics/IndustryDynamicsAll.vue'

//首页行业动态引入的vue组件
import IndustryDynamicsList from '../components/Home/IndustryDynamics/IndustryDynamicsList.vue'
//扫码上报，一键上报
import scan from '../components/Home/scan/scan.vue'
//一键上报
import report from '../components/Home/scan/report.vue'
import scanreport from '../components/Home/scan/scanreport .vue'


//订单总页面
import OrderCenter from '../components/fault/OrderCenter.vue'
//待处理
import ToBeTreated from "../components/fault/OrderCenterOperation/ToBeTreated"
//处理中
import treated from "../components/fault/OrderCenterOperation/treated"
//待评价
import evaluate from "../components/fault/OrderCenterOperation/evaluate"
//已完成
import complete from "../components/fault/OrderCenterOperation/complete"

// 我的订单
import MineOrder from '../components/fault/MineOrder.vue'
//待处理
import MineToBeTreated from '../components/fault/MineOrderOperation/MineToBeTreated.vue'
//处理中
import MineTreated from '../components/fault/MineOrderOperation/MineTreated.vue'
//待评价
import MineEvaluate from '../components/fault/MineOrderOperation/MineEvaluate.vue'
//已完成
import MineComplete from '../components/fault/MineOrderOperation/MineComplete.vue'

//评论
import pinglun from '../components/fault/pinglun/pinglun.vue'//我的订单的状态


//登录
import login from '../components/Login/login.vue'
//注册
import register from '../components/Login/register.vue'

import Node from '../components/Publice/Node.vue'


//我的
import my from '../components/My/my.vue'

//我的页面中的组件

//个人信息
import personaldata from '../components/My/myMessage/personaldata.vue'


//测试正在加载中
// import loading from '../components/Publice/loading.vue'


// import newsdetail from '../components/Home/News/newsdetail.vue'
// import sharedetail from '../components/Home/Share/sharedetail.vue'
// import buydetail from '../components/Home/Buy/buydetail.vue'

// import buycomment from '../components/Home/Buy/buycomment.vue'
// import goodsdesc from '../components/Home/Buy/goodsdesc.vue'
const router = new VueRouter({
  // mode: 'history',
  linkActiveClass: 'selectColor',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      meta: {
        title: '首页'
      },
      component: home,
    },
    //首页中行业动态的文章总列表
    {
      path: "/IndustryDynamicsAll",
      meta: {
        title: "行业动态"
      },
      component: IndustryDynamicsAll
    },
    //首页中的行业动态
    {
      path: '/IndustryDynamicsList',
      meta: {
        title: '行业详情'
      },
      component: IndustryDynamicsList
    },


    //订单中心
    {
      path: '/OrderCenter',
      redirect:"/OrderCenter/ToBeTreated",
      meta: {
        title: '订单中心'
      },
      component: OrderCenter,
      children: [
        {
          path: "ToBeTreated",
          meta: {
            title: "待处理"
          },
          component: ToBeTreated,
        },
        {
          path: "treated",
          meta: {
            title: "处理中"
          },
          component: treated,
        },
        {
          path: "evaluate",
          meta: {
            title: "待评价"
          },
          component: evaluate,
        },
        {
          path: "complete",
          meta: {
            title: "已完成"
          },
          component: complete,
        }
      ]
    },

    // 我的订单
    {
      path: "/MineOrder",
      redirect:"/MineOrder/MineToBeTreated",
      meta: {
        title: "我的订单"
      },
      component: MineOrder,
      children: [
        //待处理
        {
          path: "MineToBeTreated",
          meta: {
            title: "待处理"
          },
          component: MineToBeTreated
        },
        //处理中
        {
          path: "MineTreated",
          meta: {
            title: "处理中"
          },
          component: MineTreated
        },
        //待评价
        {
          path: "MineEvaluate",
          meta: {
            title: "待评价"
          },
          component: MineEvaluate
        },
        //已完成
        {
          path: "MineComplete",
          meta: {
            title: "已完成"
          },
          component: MineComplete
        }
      ]
    },

    //评论
    {
      path: "/pinglun",
      meta: {
        title: "发表评论"
      },
      component: pinglun
    },


    {
      path: '/login',
      meta: {
        title: '登录'
      },
      component: login
    },
    {
      path: '/register',
      meta: {
        title: '注册'
      },
      component: register
    },
    {
      path: '/scan',
      meta: {
        title: '扫码'
      },
      component: scan
    },
    {
      path: '/scanreport',
      meta: {
        title: '扫码结果'
      },
      component: scanreport
    },
    {
      path: '/report',
      meta: {
        title: '一键上报'
      },
      component: report
    },


    //我
    {
      path: '/my',
      meta: {
        title: '我'
      },
      component: my
    },
    //个人信息
    {
      path: '/personaldata',
      meta: {
        title: '个人信息'
      },
      component: personaldata
    },


    {
      path: '/node',
      meta: {
        title: 'node'
      },
      component: Node
    }
    // { name: 'newsdetail', meta: { title: '新闻详情' }, path: '/news/:id', component: newsdetail, props: true },
    // { name: 'sharedetail', meta: { title: '图片详情' }, path: '/share/:id', component: sharedetail, props: true },
    // { name: 'buydetail', meta: { title: '商品详情' }, path: '/buy/:id', component: buydetail, props: true },
    // { name: 'buycomment', meta: { title: '商品评论' }, path: '/buydetail/buycomment/:id', component: buycomment, props: true },
    // { name: 'goodsdesc', meta: { title: '商品介绍' }, path: '/buydetail/goodsdesc/:id', component: goodsdesc, props: true }
  ]
})

router.afterEach((to, from) => {
  // console.log(to)
  document.title = to.meta.title
})
export default router
