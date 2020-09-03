<template>
  <div>
    <CRow class="mr-2">
      <CCol
        sm
        md="4"
        lg="3"
        xl="2"
        class="mb-4 d-flex justify-content-center"
        v-for="item in cards"
        :key="item.title"
      >
        <router-link class="routerLink" :to="`${item.link}`">
          <div class="text-center cardStyle">
            <!-- <b-badge pill class="notif-badge" variant="danger">5</b-badge> -->
            <CCardBody>
              <img class="image" :src="require(`@/assets/icon-udm/${item.image}`)" alt />
              <h5 class="titleSize pt-2">{{item.title}}</h5>
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
          title: 'RIWAYAT SUAMI / ISTRI',
          image: 'couple.png',
          link: '/pembaruan-data-mandiri/riwayat-suami-istri'
        },
        {
          title: 'RIWAYAT PENDIDIKAN',
          image: 'graduation.png',
          link: '/pembaruan-data-mandiri/riwayat-pendidikan'
        },
        {
          title: 'RIWAYAT JABATAN',
          image: 'department.png',
          link: '/pembaruan-data-mandiri/riwayat-jabatan'
        },
        {
          title: 'RIWAYAT DIKLAT',
          image: 'books.png',
          link: '/pembaruan-data-mandiri/riwayat-diklat'
        },
        {
          title: 'RIWAYAT KGB',
          image: 'money.png',
          link: '/pembaruan-data-mandiri/riwayat-kgb'
        },
        {
          title: 'RIWAYAT LAIN-LAIN',
          image: 'search.png',
          link: '/pembaruan-data-mandiri/riwayat-lain-lain'
        },
        {
          title: 'RIWAYAT PRESTASI',
          image: 'target.png',
          link: '/pembaruan-data-mandiri/riwayat-prestasi'
        },
        {
          title: 'RIWAYAT KURSUS',
          image: 'training.png',
          link: '/pembaruan-data-mandiri/riwayat-kursus'
        },
        {
          title: 'RIWAYAT SKP',
          image: 'goal.png',
          link: '/pembaruan-data-mandiri/riwayat-skp'
        },
        {
          title: 'RIWAYAT PENGHARGAAN',
          image: 'appreciation.png',
          link: '/pembaruan-data-mandiri/riwayat-penghargaan'
        },
        {
          title: 'RIWAYAT PMK',
          image: 'review.png',
          link: '/pembaruan-data-mandiri/riwayat-pmk'
        },
        {
          title: 'RIWAYAT CLTN',
          image: 'log-out.png',
          link: '/pembaruan-data-mandiri/riwayat-cltn'
        },
        {
          title: 'RIWAYAT PROFESI',
          image: 'profession.png',
          link: '/pembaruan-data-mandiri/riwayat-profesi'
        },
        {
          title: 'RIWAYAT ANGKA KREDIT',
          image: 'credit.png',
          link: '/pembaruan-data-mandiri/riwayat-angka-kredit'
        },
        {
          title: 'RIWAYAT LHKPN',
          image: 'stats.png',
          link: '/pembaruan-data-mandiri/riwayat-lhkpn'
        },
        {
          title: 'RIWAYAT ORGANISASI',
          image: 'organization.png',
          link: '/pembaruan-data-mandiri/riwayat-organisasi'
        },
        {
          title: 'RIWAYAT KEPANITIAAN',
          image: 'group.png',
          link: '/pembaruan-data-mandiri/riwayat-kepanitiaan'
        },
        {
          title: 'RIWAYAT GOLONGAN',
          image: 'forum.png',
          link: '/pembaruan-data-mandiri/riwayat-golongan'
        },
        {
          title: 'RIWAYAT HUKDIS',
          image: 'hukdis.png',
          link: '/pembaruan-data-mandiri/riwayat-hukdis'
        }
      ]
    };
  }
};
</script> 

<style scoped>
.notif-badge {
  position: absolute;
  font-size: 17px;
  /* margin-top: -15px; */
  margin-left: 45px;
  width: 30px;
  height: 30px;
}

.cardStyle {
  transition: 0.6s;
  cursor: pointer;
  animation-duration: 2s;
  border-radius: 30px;
  background: #efeeee;
  box-shadow: 14px 14px 28px #bababa, -14px -14px 28px #ffffff;
  width: 150px;
  height: 130px;
}
.cardStyle:hover {
  transition: 0.6s;
  box-shadow: 0 4px 6px 0 rgba(32, 33, 36, 0.28);
}
.image {
  width: 40%;
}
.titleSize {
  font-family: 'Nunito', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #444966;
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

