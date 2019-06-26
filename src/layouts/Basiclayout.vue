<template>
  <el-container>
    <el-header class="header">Header</el-header>
    <el-container>
      <el-aside width="180px" class="aside">
        <router-link to="/home">Home</router-link> |
         <router-link to="/about">About</router-link>
      </el-aside>
      <el-container>
        <el-main>
          <div>{{ msg }}</div>
          <router-view/>
        </el-main>
        <el-footer class="footer">Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'basiclayout',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      msg: (state) => state.app.msg
    })
  },
  methods: {},
  created () {}
}
</script>

<style lang="scss" scoped>
  .aside {
    background-color: #eee;
  }
  .header {
    background-color: #ddd;
  }
  .footer {
    background-color: #ddd;
  }
</style>
