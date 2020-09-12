<template>
  <div id="app">
        <div>
            <vue-scroll-progress-bar  height="4px" backgroundColor='#455C56' zIndex='505050'/>
        </div>
        <transition name="fade" mode="out-in">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
  </div>
</template>
<script>

export default {
  name: "app",
};
</script>

<style lang="scss" scoped>

</style>
