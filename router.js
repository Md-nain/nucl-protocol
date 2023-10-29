import { createRouter, createWebHistory } from 'vue-router';
import Profile from '@/pages/Profile.vue';
import Settings from '@/pages/Settings.vue';
import Automated from '@/pages/Automated.vue';
import StETHETHRecursiveStaking from '@/pages/StETHETHRecursiveStaking.vue'; 
import AdditionalModals from '@/pages/additionalModals.vue'; 
import Staking from '@/pages/staking.vue'; 

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