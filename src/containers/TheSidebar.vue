<template>
  <CSidebar
    class="colorBar"
    fixed
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <img class="w-75 p-2 c-sidebar-brand-full head-brand" src="../assets/Logo/Logo_BKN.png" alt />
      <img
        class="p-2 c-sidebar-brand-minimized small-brand"
        src="../assets/Logo/Garuda Pancasila Logo Vector.png"
        alt
      />
    </CSidebarBrand>
    <div class="side-text container">
      <span class="text-simpeg c-sidebar-brand-full">SIMPEGNAS</span>
      <span @click="$store.commit('toggleSidebarDesktop')" class="cross-btn d-none">
        <i class="fa fa-times" aria-hidden="true"></i>
      </span>
    </div>
    <CRenderFunction class="textColor mt-3" flat :content-to-render="$options.nav" />
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from './_nav';

export default {
  name: 'TheSidebar',
  nav,
  computed: {
    show() {
      return this.$store.state.sidebarShow;
    },
    minimize() {
      return this.$store.state.sidebarMinimize;
    }
  }
};
</script>

<style lang="scss">
.small-brand {
  width: 50px;
}

.side-text {
  font-family: "Nunito";
  font-weight: bold;
  color: #f1eeee;
  margin-top: 15px;

  .text-simpeg {
    font-size: 13px;
    margin-bottom: -20px;
  }
  .cross-btn {
    margin-left: 120px;
    padding: 5px;
    cursor: pointer;
    border-radius: 100px;
  }
  .cross-btn {
    margin-left: 120px;
    padding: 7px;
    cursor: pointer;
    border-radius: 6px;
    transition: 0.8s;
  }
  .cross-btn:hover {
    background-color: rgba(255, 255, 255, 0.4);
    transition: 0.8s;
    // width: 20px;
    // height: 10px;
  }
}

@media (max-width: 991px) {
  .cross-btn {
    display: inline !important;
    margin-left: 120px;
    padding: 5px;
    cursor: pointer;
    border-radius: 100px;
  }
}

.close-side {
  text-align: center;
  font-size: 13px;
  font-family: "Nunito";
}

@media (max-width: 450px) {
  .c-sidebar-brand-full {
    width: 150px !important;
  }
}

.colorBar {
  // background: #da4453;
  // background: -webkit-linear-gradient(to top, #89216b, #da4453);
  // background: linear-gradient(to top, #89216b, #da4453);

  background: #159957;
  background: -webkit-linear-gradient(to bottom, #155799, #159957);
  background: linear-gradient(to bottom, #155799, #159957);
}

.textColor {
  margin-top: -5px;
  font-weight: 600;
  font-family: "Nunito";
}
</style>
