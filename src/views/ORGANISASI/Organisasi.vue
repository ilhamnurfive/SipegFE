<template>
  <div>
    <CRow>
      <CCol v-for="item in cards" :key="item.title" sm="6" md="4">
        <router-link class="routerLink" :to="`${item.link}`">
          <div class="text-center font-weight-bold cardStyle animated fadeIn">
            <CCardBody>
              <img class="image-menu" :src="require(`@/assets/icon-organisasi/${item.image}`)" alt />
              <h5 class="font-weight-bold text-icon pt-2">{{ item.title }}</h5>
            </CCardBody>
          </div>
        </router-link>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'UNIT ORGANISASI',
          image: 'networking.png',
          link: '/organisasi/unit-organisasi'
        },
        {
          title: 'ANALISIS JABATAN',
          image: 'clipboard.png',
          link: '/organisasi/analisis-jabatan'
        },
        {
          title: 'ANALISIS UNIT',
          image: 'computer.png',
          link: '/organisasi/analisis-unit'
        },
        {
          title: 'ANALISIS BEBAN KERJA',
          image: 'plan.png',
          link: '/organisasi/analisis-beban-kerja'
        },
        {
          title: 'PETA JABATAN',
          image: 'diagram.png',
          link: '/organisasi/peta-jabatan'
        },
        {
          title: 'EVALUASI JABATAN',
          image: 'result.png',
          link: '/organisasi/evaluasi-jabatan'
        }
      ]
    };
  }
};
</script>

<style>
</style>
