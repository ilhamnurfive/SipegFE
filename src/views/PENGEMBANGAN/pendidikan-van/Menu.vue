<template>
  <CRow>
    <CCol v-for="item in cards" :key="item.title" sm="6" md="4">
      <router-link class="routerLink" :to="{name: item.link}">
        <div class="text-center font-weight-bold cardStyle animated fadeIn">
          <CCardBody>
            <img class="image-menu" :src="require(`@/assets/icon-menu/${item.image}`)" alt />
            <h5 class="text-icon pt-2">{{item.title}}</h5>
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
        { title: 'TUGAS BELAJAR', image: 'account.png', link: 'tugasbelajar' },
        { title: 'IZIN BELAJAR', image: 'graduation.png', link: 'izinbelajar' },
        { title: 'JENIS UJIAN', image: 'department.png', link: 'jenisujian' },
        {
          title: 'UJIAN & DETAIL UJIAN',
          image: 'department.png',
          link: 'ujian-dan-jenis'
        },
        { title: 'UPKP', image: 'department.png', link: 'upkp' },
        { title: 'UJIAN DINAS', image: 'department.png', link: 'ujian-dinas' }
      ]
    };
  }
};
</script>


<style>
.cardStyle {
  transition: 0.6s;
  cursor: pointer;
  animation-duration: 2s;
  border-radius: 50px;
  background: #efeeee;
  box-shadow: 14px 14px 28px #bababa, -14px -14px 28px #ffffff;
  margin: 10%;
}
.cardStyle:hover {
  transition: 0.6s;
  box-shadow: 0 4px 6px 0 rgba(32, 33, 36, 0.28);
}

.textSize {
  font-size: 1.3rem;
}

.routerLink {
  text-decoration: none;
  color: inherit;
}
.routerLink:hover {
  text-decoration: none;
  color: inherit;
}
</style>