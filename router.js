import { createRouter, createWebHistory } from 'vue-router';
import Profile from './src/pages/Profile.vue';
import Settings from './src/pages/Settings.vue';
import Automated from './src/pages/Automated.vue';
import StETHETHRecursiveStaking from './src/pages/StETHETHRecursiveStaking.vue'; 
import AdditionalModals from './src/pages/additionalModals.vue'; 
import Staking from './src/pages/staking.vue'; 

const routes = [
  { path: '/', component: Profile },
  { path: '/settings', component: Settings },
  { path: '/automated', component: Automated },
  { path: '/stETHETHRecursiveStaking', component: StETHETHRecursiveStaking },
  { path: '/additionalModals', component: AdditionalModals },
  { path: '/staking', component: Staking },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;