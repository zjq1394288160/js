<template>
  <div>
      <ul>
        <li><router-link to="/index">index</router-link></li>
        <li><router-link to="/subpage">subpage</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'router'
}
</script>
