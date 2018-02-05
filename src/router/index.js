import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Activity from '@/pages/activity'
import VueResource from 'vue-resource'
import ActiveDetail from '@/pages/activeDetail'
import Giftpackage from '@/pages/giftpackage'
import GameCenter from '@/pages/gameCenter'
import Collect from '@/pages/gameCenter/collect'
import GameCatogry from '@/pages/gameCatogry'
import Gameinclassification from '@/pages/gameinclassification'
import Welfare from '@/pages/welfare'
import TaskList from '@/pages/tasklist'
import PointList from '@/pages/pointList'
import GetPointList from '@/pages/getPointList'
import ChangePointList from '@/pages/changePointList'
import ChangeGift from '@/pages/changeGift'
import EchangeVirtualGift from '@/pages/echangeVirtualGift'
import EchangeEntityGift from '@/pages/echangeEntityGift.'
import LeaguerIndex from '@/pages/leaguerIndex'
import MyInfo from '@/pages/myInfo'
import MyinfoDetail from '@/pages/myinfoDetail'
import Register from '@/pages/register'
import Helper from '@/pages/helper'
import HelperDetail from '@/pages/helperDetail'
import Charge from '@/pages/charge'
import GameHome from '@/pages/gameHome'
import NewGame from '@/pages/newGame'
import HotGame from '@/pages/hotGame'
import NewService from '@/pages/newService'
import ActiveModule from '@/pages/activeModule'
import Notice from '@/pages/notice'
import NoticeDetail from '@/pages/noticedetail'
import Gamedetail from '@/pages/gamedetails'
import Newopenservicegame from '@/pages/newopenservicegame'
import Newopenservicegame2 from '@/pages/newopenservicegame2'


Vue.use(Router)
Vue.use(VueResource);

/*
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/leaguerIndex',
      children: [
          {
            path: '/gameHome',
            name: 'GameHome',
            component: GameHome,
            redirect:'/hotGame',
            children:[
              {
                path: '/hotGame',
                name: 'HotGame',
                component: HotGame
              },
              {
                path: '/newGame',
                name: 'NewGame',
                component: NewGame
              },
              {
                path: '/gamedetail',
                name: 'Gamedetail',
                component: Gamedetail
              },
              {
                path: '/gameCatogry',
                name: 'GameCatogry',
                component: GameCatogry
              },
              {
                path: '/gameinclassification',
                name: 'Gameinclassification',
                component: Gameinclassification
              },
              {
                path: '/newService',
                name: 'NewService',
                component: NewService,
                redirect:'/newopenservicegame',
                children:[
                  {
                    path: '/newopenservicegame',
                    name: 'Newopenservicegame',
                    component: Newopenservicegame
                  },
                  {
                    path: '/newopenservicegame2',
                    name: 'Newopenservicegame2',
                    component: Newopenservicegame2
                  }
                ] 
              }
            ]
          },
          {
            path: '/activeModule',
            name: 'ActiveModule',
            component: ActiveModule,
            redirect:'/activity',
            children:[
              {
                path: '/activity',
                name: 'Activity',
                component: Activity
              },
              {
                path: '/notice',
                name: 'Notice',
                component: Notice
              },
              {
                path: '/noticedetail',
                name: 'NoticeDetail',
                component: NoticeDetail
              }
            ]
          },
          {
            path: '/giftpackage',
            name: 'Giftpackage',
            component: Giftpackage
          },
          {
            path: '/leaguerIndex',
            name: 'LeaguerIndex',
            component: LeaguerIndex
          },
          {
            path: '/myInfo',
            name: 'MyInfo',
            component: MyInfo
          },
          {
            path: '/myinfoDetail',
            name: 'MyinfoDetail',
            component: MyinfoDetail
          },
          {
            path:'/helper',
            name:'Helper',
            component: Helper
          },
          {
            path:'/helperDetail',
            name:'HelperDetail',
            component: HelperDetail
          },
          {
            path:'/register',
            name:'Register',
            component: Register
          }, 
          {
            path:'/charge',
            name:'Charge',
            component: Charge
          },
          {
            path: '/welfare',
            name: 'Welfare',
            component: Welfare,
            redirect: '/taskList',
            children: [
              {
                path:'/taskList',
                name: 'TaskList',
                component: TaskList
              },
              {
                path:'/pointList',
                name: 'PointList',
                component: PointList,
                redirect: '/getPointList',
                children:[
                  {
                    path:'/getPointList',
                    name: 'GetPointList',
                    component: GetPointList
                  },
                  {
                    path:'/changePointList',
                    name: 'ChangePointList',
                    component: ChangePointList
                  }
                ]
              },
              {
                path:'/changeGift',
                name: 'ChangeGift',
                component: ChangeGift,
                children:[
                  {
                    path:'/echangeVirtualGift',
                    name: 'EchangeVirtualGift',
                    component: EchangeVirtualGift
                  },
                  {
                    path:'/echangeEntityGift',
                    name: 'EchangeEntityGift',
                    component: EchangeEntityGift
                  }
                ]
              }
            ]
          }
      ]
    },
    {
      path: '/gameCenter',
      name: 'GameCenter',
      component: GameCenter 
    },
    {
      path: '/activeDetail',
      name: 'ActiveDetail',
      component: ActiveDetail
    }
  ]
})
*/

const vueRouter = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/leaguerIndex',
      children: [
          {
            path: '/gameHome',
            name: 'GameHome',
            component: GameHome,
            redirect:'/hotGame',
            children:[
              {
                path: '/hotGame',
                name: 'HotGame',
                component: HotGame
              },
              {
                path: '/newGame',
                name: 'NewGame',
                component: NewGame
              },
              {
                path: '/gamedetail',
                name: 'Gamedetail',
                component: Gamedetail
              },
              {
                path: '/gameCatogry',
                name: 'GameCatogry',
                component: GameCatogry
              },
              {
                path: '/gameinclassification',
                name: 'Gameinclassification',
                component: Gameinclassification
              },
              {
                path: '/newService',
                name: 'NewService',
                component: NewService,
                redirect:'/newopenservicegame',
                children:[
                  {
                    path: '/newopenservicegame',
                    name: 'Newopenservicegame',
                    component: Newopenservicegame
                  },
                  {
                    path: '/newopenservicegame2',
                    name: 'Newopenservicegame2',
                    component: Newopenservicegame2
                  }
                ] 
              }
            ]
          },
          {
            path: '/activeModule',
            name: 'ActiveModule',
            component: ActiveModule,
            redirect:'/activity',
            children:[
              {
                path: '/activity',
                name: 'Activity',
                component: Activity
              },
              {
                path: '/notice',
                name: 'Notice',
                component: Notice
              },
              {
                path: '/noticedetail',
                name: 'NoticeDetail',
                component: NoticeDetail
              }
            ]
          },
          {
            path: '/giftpackage',
            name: 'Giftpackage',
            component: Giftpackage
          },
          {
            path: '/leaguerIndex',
            name: 'LeaguerIndex',
            component: LeaguerIndex
          },
          {
            path: '/myInfo',
            name: 'MyInfo',
            component: MyInfo
          },
          {
            path: '/myinfoDetail',
            name: 'MyinfoDetail',
            component: MyinfoDetail
          },
          {
            path:'/helper',
            name:'Helper',
            component: Helper
          },
          {
            path:'/helperDetail',
            name:'HelperDetail',
            component: HelperDetail
          },
          {
            path:'/register',
            name:'Register',
            component: Register
          }, 
          {
            path:'/charge',
            name:'Charge',
            component: Charge
          },
          {
            path: '/welfare',
            name: 'Welfare',
            component: Welfare,
            redirect: '/taskList',
            children: [
              {
                path:'/taskList',
                name: 'TaskList',
                component: TaskList
              },
              {
                path:'/pointList',
                name: 'PointList',
                component: PointList,
                redirect: '/getPointList',
                children:[
                  {
                    path:'/getPointList',
                    name: 'GetPointList',
                    component: GetPointList
                  },
                  {
                    path:'/changePointList',
                    name: 'ChangePointList',
                    component: ChangePointList
                  }
                ]
              },
              {
                path:'/changeGift',
                name: 'ChangeGift',
                component: ChangeGift,
                children:[
                  {
                    path:'/echangeVirtualGift',
                    name: 'EchangeVirtualGift',
                    component: EchangeVirtualGift
                  },
                  {
                    path:'/echangeEntityGift',
                    name: 'EchangeEntityGift',
                    component: EchangeEntityGift
                  }
                ]
              }
            ]
          }
      ]
    },
    {
      path: '/gameCenter',
      name: 'GameCenter',
      component: GameCenter,
      children:[ 
        {
          path:'/collect',
          name: 'Collect',
          component: Collect
        }
      ] 
    },
    {
      path: '/activeDetail',
      name: 'ActiveDetail',
      component: ActiveDetail
    }
  ]
})

vueRouter.beforeEach(function (to, from, next) {  
    var uid = window.localStorage.getItem("uid")
    if( uid == null){
      return next()
    }
    return next()
});  

export default  vueRouter
