<template>
  <div class="navbar">
    <div class="container-fluid">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo.png" />
        </router-link>
      </div>
      <div class="pages-link">
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style lang="scss" scoped>
.navbar {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  left: 0;
  position: absolute;
  right: 0;
  z-index: 999;
  display: inline-flex;
  flex-wrap: nowrap;
  .logo {
    width: 20%;
    text-align: center;
    img {
      max-width: 100%;
    }
  }
  .pages-link {
    width: 60%;
    text-align: left;
  }
}
</style>
