<template lang="pug">
.pages
    v-header
    router-view
</template>

<script>
import vHeader from '@/components/header';
export default {
    components: {
        vHeader
    }
}
</script>

<style lang="scss">
@import "assets/style";
@import "assets/list";

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
