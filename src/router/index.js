import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import VideoConference from '@/components/VideoConference.vue';
import Login from '@/components/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        auth: true
      }
    },
    {
      path: '/conference',
      name: 'VideoConference',
      component: VideoConference,
      meta: {
        auth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        auth: false
      }
    }
  ]
});
