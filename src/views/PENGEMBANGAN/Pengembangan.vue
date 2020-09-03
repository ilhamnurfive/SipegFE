<template>
  <CRow>
    <CCol v-for="item in cards" :key="item.title" sm="6" md="4">
      <router-link class="routerLink" :to="`${item.link}`">
        <div class="text-center font-weight-bold cardStyle animated fadeIn">
          <CCardBody>
            <img class="image-menu" :src="require(`@/assets/icon-menu/${item.image}`)" alt />
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
          title: 'MUTASI',
          image: 'account.png',
          link: '/pengembangan/list-mutasi'
        },
        {
          title: 'PENDIDIKAN',
          image: 'graduation.png',
          link: '/pengembangan/pendidikan'
        },
        {
          title: 'JABATAN',
          image: 'department.png',
          link: '/pengembangan/list-jabatan'
        },
        {
          title: 'HUKDIS',
          image: 'books.png',
          link: '/pengembangan/list-hukdis'
        },
        {
          title: 'KGB',
          image: 'money.png',
          link: '/pengembangan/kgb'
        },
        {
          title: 'LAIN-LAIN',
          image: 'search.png',
          link: '/pengembangan/lain-lain'
        }
      ]
    };
  }
};
</script>

