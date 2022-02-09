<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/test">test</router-link> |
    <router-link to="/input">input</router-link> |
    <router-link to="/table">table</router-link> |
    <router-link to="/icon">icon</router-link> |
    <router-link to="/button">button</router-link> |
    <router-link to="/tooltip">tooltip</router-link> |
    <router-link to="/collapse">collapse</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url("~normalize.css");
// @import url("./theme/component/icon/index.css");

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
