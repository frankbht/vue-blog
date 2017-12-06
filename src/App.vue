<template>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

.post-list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
}

.post-item {
  width: 50%;
  margin: auto;
  flex: 0 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.post-item-span {
  flex: 0 50%;
}

.nav {
  list-style-type: none;
  padding: 0;
}

.nav-item {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

form {
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

label {
  flex: 0 100%;
}

input {
  flex: 0 100%;
}


</style>
