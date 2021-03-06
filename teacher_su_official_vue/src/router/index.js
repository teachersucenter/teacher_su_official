import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:"Home"
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta:{
      title:"About"
    }
  },
  {
    path:'/courses',
    name:'Courses',
    component: () => import('../views/Courses.vue'),
    meta:{
      title:"Courses"
    }
  },
  {
    path:'/studyWithUs',
    name:'Study',
    component: () => import('../views/Study.vue'),
    meta:{
      title:"Study with us"
    }
  },

  {
    path:'/career',
    name:'Career',
    component: () => import('../views/Career.vue'),
    meta:{
      title:"Career opportunity"
    }
    
  },
  {
    path:'/register',
    name:'Register',
    component: () => import('../views/Register.vue'),
    meta:{
      title:"Register"
    }
  },
  {
    path:'/help',
    name:'Help',
    component: () => import('../views/Help.vue'),
    meta:{
      title:"Help"
    }
  },
  {
    path:'/announcement',
    name:'Announcement',
    component: () => import('../views/Announcement.vue'),
    meta:{
      title:"Announcements"
    }
  },
  {
    path:'/pathway',
    name:'pathway',
    component: () => import('../views/pathway.vue'),
    meta:{
      title:"Pathway"
    }
  },
  {
    path:'/course/:id',
    name:'coursedetail',
    component: () => import('../views/coursedetail.vue'),
    meta:{
      title:"Course details"
    }
  },
  {
    path:'/community',
    name:'Community',
    component: () => import('../views/Community.vue'),
    meta:{
      title:"Our community"
    }
  },
  {
    path:'/halloffame',
    name:'Hall',
    component: () => import('../views/Hall.vue'),
    meta:{
      title:"Hall of fame"
    }
  },
  {
    path:'/ielts',
    name:'Hallielts',
    component: () => import('../views/Hallielts.vue'),
    meta:{
      title:"Ielts"
    }
  },
  {
    path:'/duolingo',
    name:'Hallduolingo',
    component: () => import('../views/Hallduolingo.vue'),
    meta:{
      title:"Duolingo"
    }
  },
  {
    path:'/younglearner',
    name:'Hallyl',
    component: () => import('../views/Hallyl.vue'),
    meta:{
      title:"Young learner"
    }
  },
  {
    path:'/eventDetail/:id',
    name:'eventDetail',
    component: () => import('../views/eventDetail.vue'),
    meta:{
      title:"event detail"
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass:"active"
})

router.beforeEach((to,from,next)=>{
    document.title = `${to.meta.title}`;
    next();
})

export default router
