<template>
  <el-menu-item v-if="isLeaf" :index="index" >
    <i :class="(item.icon)?'fa fa-'+ item.icon:''"></i>{{ item.label }}
  </el-menu-item>
  <el-submenu v-else="!isLeaf" :index="index">
    <template slot="title">
      <i :class="(item.icon)?'fa fa-'+ item.icon:''"></i>{{ item.label }}
    </template>
    <aside-nav-menu-item v-for="child in item.children" :key="item.id" :item="child" v-if="!isLeaf" >
    </aside-nav-menu-item>
  </el-submenu>
</template>

<script>
import * as constants from '../constants'

export default {
  name: 'asideNavMenuItem',
  props: ['item'],
  data () {
    return {
    }
  },
  computed: {
    isLeaf: function () {
      return this.item.children === undefined || this.item.children.length === 0
    },
    index: function () {
      if (this.item.attrs) {
        return constants.ADMIN_PATH + this.item.attrs.href
      }
      return String(this.item.id)
    }
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fa {
    margin-right: 5px;
  }
</style>
