<template>
    <!-- Bottom Right Alert -->
    <div class="alert-container">
        <div class="alert bottom-right-alert" v-for="alert in alerts" :key="alert.id">
            <div class="alert-content">
                <div class="alert-header">
                <div class="heading">
                    <h6>{{ alert.title }}</h6>
                </div>
                <button type="button" class="btn-close" @click="hideAlert(alert.id)"></button>
                </div>
                <div class="alert-body">
                <span>{{ alert.message }}</span>
                </div>
            </div>
        </div><!-- Bottom Right Alert -->
    </div>
    

</template>
  
<script>
import { useAlertStore } from '@/store/index.js';
import { computed } from 'vue';

export default {

    setup() {
        const alertStore = useAlertStore();
        const alerts = computed(() => alertStore.alerts);
        return { 
            alerts,
            hideAlert: alertStore.hide
        };

    }
};
</script>

<style scoped>
.alert-container {
    display: flex;
    flex-direction: column-reverse;
}
</style>