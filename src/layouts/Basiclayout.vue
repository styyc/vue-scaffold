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
          <div>{{ computedMsg }}</div>
          <div style="word-wrap:break-word">{{ stateinfos }}</div>
          <el-button @click="asyncchangeMsg(`click${Math.random()}`)">click</el-button>
          <el-button @click="asynccommitPromise(`click${Math.random()}`)">asynccommitPromise</el-button>
          <router-view/>
        </el-main>
        <el-footer class="footer">Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Routes from '@/routes'

export default {
  name: 'basiclayout',
  data () {
    return {
      stateinfos: ''
    }
  },
  computed: {
    ...mapState({
      msg: state => state.app.msg
    }),
    ...mapGetters({
      computedMsg: 'app/computedMsg'
    }),
    Routes () {
      return Routes.filter(item => !item.hideInmenu)
    }
  },
  methods: {
    ...mapActions({
      asyncchangeMsg: 'app/asyncchangeMsg'
    }),
    asynccommitPromise (params) {
      // dispatch return promise
      this.$store.dispatch('app/asyncchangeMsg', params).then(res => {
        this.stateinfos = `${this.stateinfos}${res}`
      })
    }
  }
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
