<template>
  <div id="app">
    <header>
      <div class="header">
        <nav class="nav">
          <div class="nav-left"></div>
          <div class="nav-center">
            <a href="/">首页</a>
          </div>
          <div class="nav-right"></div>
        </nav>
      </div>
    </header>
    <aside-nav-menu></aside-nav-menu>
    <section class="main-content">
      <div class="content-container">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </section>
    <footer>
      <foot></foot>
    </footer>
  </div>
</template>

<script>
import AsideNavMenu from './components/AsideNavMenu'
import Foot from './pages/Footer'

export default {
  name: 'app',
  components: {
    AsideNavMenu: AsideNavMenu,
    Foot: Foot
  },
  mounted: function () {
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    height: 100%;
  }

  /*-------------
      Layout
  --------------*/

  body, #app{
    display: flex;
    flex-direction: column;
    height: 100%;
    font: 400 15px/1.4 'Open Sans',sans-serif;
  }

  header{
    /* We want the header to have a static height - it will always take up just as much space as it needs.  */
    /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
    flex: 0 0 auto;
  }

  .main-content{
    /* By setting flex-grow to 1, the main content will take up
      all of the remaining space on the page (the other elements have flex-grow: 0 and won't contest the free space). */
    /* 1 flex-grow, 0 flex-shrink, auto flex-basis */
    flex: 1 0 auto;
  }

  footer{
    /* Just like the header, the footer will have a static height - it shouldn't grow or shrink.  */
    /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
    flex: 0 0 auto;
  }


  /*-------------
      Header
  --------------*/

  header {
    background-color: #20a0ff;
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    height: 50px;
    position: fixed;
    width: 100%;
    z-index: 1000;
  }

  /*-------------
      Sidebar
  --------------*/
  .app-sidebar {
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    padding: 0 0 50px;
    width: 180px;
    min-width: 45px;
    max-height: 100vh;
    height: calc(100% - 50px);
    z-index: 1023;
    background: #fff;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1), 0 0 0 1px hsla(0,0%,7%,.1);
    overflow-y: auto;
    overflow-x: hidden;
  }

  /*--------------------
      Main Content
  --------------------*/

  .main-content{
    color: #525252;
    padding: 40px;
    margin-top: 50px;
    margin-left: 180px;
  }

  /*--------------------
      Footer styles
  --------------------*/

  footer{
    background-color: #eef1f6;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    text-align: left;
    font: normal 16px sans-serif;
    padding: 25px 50px;
    margin-left: 180px;
    text-align: center;
    font-size: 1.0em;
  }

  /*--------------------
      Breadcrumb
  --------------------*/
  .breadcrumb-container .breadcrumb-inner {
    float: right;
  }

  .content-wrapper .toolbar {
    padding: 10px 0;
  }

  .content-wrapper .toolbar .el-form-item {
    margin-bottom: 10px
  }
</style>
