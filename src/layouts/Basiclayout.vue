<template>
  <el-container>
    <el-header class="header">Header</el-header>
    <el-container>
      <el-aside width="180px" class="aside">
        <div v-for="item in Routes" :key="item.path">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </div>
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
  import Routes from '@/routes'

  export default {
    name: 'basiclayout',
    data () {
      return {}
    },
    computed: {
      ...mapState({
        msg: (state) => state.app.msg
      }),
      Routes() {
        return Routes.filter(item => !item.hideInmenu)
      }
    },
    methods: {}
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
