import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

import Config from "../views/Config";
import Upload from "../views/Upload";
import Management from "../views/Management";
import Help from "../views/Help";

const originalPush = createRouter.prototype.push;
createRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const titleSuffix = ' | PicX 图床神器，免费、稳定、高效。'

const routes = [{
    path: '/',
    name: 'Index',
    redirect: {
      name: 'Upload'
    }
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload,
    meta: {
      title: '图片上传' + titleSuffix
    }
  },
  {
    path: '/config',
    name: 'Config',
    component: Config,
    meta: {
      title: '图床配置' + titleSuffix
    }
  },
  {
    path: '/management',
    name: 'Management',
    component: Management,
    meta: {
      title: '图片管理' + titleSuffix
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
    meta: {
      title: '帮助反馈' + titleSuffix
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: 'Upload',
  }
]

const router = new createRouter({
  // vue-router v4
  history: createWebHashHistory(''),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
