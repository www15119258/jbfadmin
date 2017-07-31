<template>
  <div class="app-sidebar">
    <el-menu :defaultActive="defaultActive" @open="menuOpen" @close="menuClose"  :collapse="isCollapse" :router="router" :default-openeds="defaultOpeneds">
      <template v-for="(item,index) in menuTree">
        <aside-nav-menu-item :item="item"></aside-nav-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import asideNavMenuItem from './AsideNavMenuItem'
import * as constants from '../constants'

export default {
  name: 'asideNavMenu',
  components: {
    asideNavMenuItem
  },
  data () {
    return {
      isCollapse: false,
      router: true,
      opens: new Set([])
    }
  },
  computed: {
    menuTree: function () {
      return this.$store.getters.getAsideMenuTree
    },
    defaultActive: function () {
      let path = this.$route.path
      return path
    },
    defaultOpeneds: function () {
      let tree = this.menuTree
      let nodes = []
      this.getNodes(tree, nodes)
      let path = this.defaultActive
      let select
      for (let node of nodes) {
        if (constants.ADMIN_PATH + node.attrs.href === path) {
          select = node.parent
          break
        }
      }
      if (select !== undefined) {
        this.opens.add(String(select))
      }
      return Array.from(this.opens)
    }
  },
  methods: {
    getNodes: function (tree, nodes) {
      for (let node of tree) {
        if (node.children !== undefined && node.children.length > 0) {
          this.getNodes(node.children, nodes)
        } else {
          nodes.push(node)
        }
      }
    },
    menuOpen (index) {
      this.opens.add(index)
    },
    menuClose (index) {
      this.opens.delete(index)
    }
  },
  mounted: function () {
    this.$store.dispatch('getAsideMenuTree')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
