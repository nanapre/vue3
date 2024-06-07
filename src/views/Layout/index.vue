<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<template>
    <div>
        <LayoutNav />
        <LayoutHeader />
        <router-view />
        <LayoutFooter />
    </div>
</template>



<style lang="scss" scoped></style>