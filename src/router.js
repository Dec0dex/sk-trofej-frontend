import Vue from 'vue';
import Router from 'vue-router';
import Error404 from './pages/Error404';
import Home from './pages/Home';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home,
    },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: Register,
    // },
    // {
    //   path: '/dashboard',
    //   name: 'Dashboard',
    //   meta: {
    //     requiresAuth: true,
    //   },
    {
      path: '/404',
      name: '404',
      component: Error404
    },
    {
      path: "*",
      redirect: "/404"
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // let token = TokenService.getToken();
    // if (token === null || token === '') {
    //   next({
    //     path: '/login',
    //     params: {nextUrl: to.fullPath},
    //   });
    // } else {
    //   ApiService.setHeader();
    //   next();
    // }
    next();
  } else {
    next();
  }
});

export default router;
