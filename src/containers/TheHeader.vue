<template>
  <CHeader fixed with-subheader light>
    <CToggler in-header class="ml-3 d-lg-none" @click="$store.commit('toggleSidebarMobile')" />
    <!-- <CToggler in-header class="ml-3 d-md-down-none" @click="$store.commit('toggleSidebarDesktop')" /> -->
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <img class="w-75 p-2 c-sidebar-brand-full" src="../assets/Logo/Logo_BKN.png" alt />
    </CHeaderBrand>

    <CHeaderNav>
      <Breadcrumbs class="bread-crumb" />
    </CHeaderNav>
    <CHeaderNav class="ml-auto mr-3">
      <TheHeaderDropdownAccnt />
    </CHeaderNav>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt';
import BreadCrumbAuto from '@/utils/Breadcrumb.vue';

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt,
    BreadCrumbAuto
  }
};
</script>

<style>
.breadcrumb {
  border-bottom: none;
  text-decoration: none;
  font-family: 'Nunito', sans-serif;
  margin-top: 23px;
}

.breadcrumb a {
  font-family: 'Nunito', sans-serif;
  color: #155799;
  font-weight: 500;
  text-decoration: none;
}
.bread-crumb {
  margin: -35px 0 -35px 0;
}

@media only screen and (max-width: 991px) {
  .bread-crumb {
    display: none;
  }
}
</style>
