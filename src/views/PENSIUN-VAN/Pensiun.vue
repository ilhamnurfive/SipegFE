<template>
  <CRow>
    <CCol v-for="item in cards" :key="item.title" sm="6" md="4">
      <router-link class="routerLink" :to="`${item.link}`">
        <div class="text-center font-weight-bold cardStyle animated fadeIn">
          <CCardBody>
            <img class="image-menu" :src="require(`@/assets/icon-pensiun/${item.image}`)" alt />
            <h5 class="font-weight-bold text-icon pt-2">{{ item.title }}</h5>
          </CCardBody>
        </div>
      </router-link>
    </CCol>
  </CRow>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'PENSIUN',
          image: 'door.png',
          link: '/pensiun/list-pensiun'
        },
        {
          title: 'MPP',
          image: 'organisation.png',
          link: '/pensiun/list-mpp'
        },
        {
          title: 'PROYEKSI PENSIUN',
          image: 'presentation.png',
          link: '/pensiun/proyeksi-pensiun'
        }
      ]
    };
  }
};
</script>

<style>
.image-pensiun {
  width: 100px;
}
</style>

