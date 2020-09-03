<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="row">
        <div class="col-md-12 col-lg-5">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Nomor Nota Usul Mutasi"
          ></form-auto>
        </div>

        <div class="col-md-12 col-lg-2 text-right text-lg-left">
          <button class="pilih-btn" :class="$message.kelas.btn_main">
            <span>
              <HeroiconsSearchOutline class="icon-sizes" />
            </span>Cari
          </button>
        </div>
      </div>
      <hr />
      <div class="container mb-5 mt-3">
        <div class="row mt-4">
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor Nota Usul Mutasi"
              read
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Nota Usul Mutasi"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nama"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="NIP"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Pangkat"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Golongan Ruang"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jabatan"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Instansi Asal"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Instansi Baru"
              read
            ></form-auto>
          </div>
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Unit Kerja Baru"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jabatan Baru"
              read
            ></form-auto>
            <label for class="font-weight-bold">SK Peralihan Kepala :</label>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor SK Peralihan Kepala"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal SK Peralihan Kepala"
            ></form-auto>
            <label for class="font-weight-bold">SK Pengangkatan :</label>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor SK Pengangkatan"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal SK Pengangkatan"
            ></form-auto>
            <label for class="font-weight-bold">Pertimbangan Teknis :</label>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor Pertek"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Pertek"
            ></form-auto>
          </div>
        </div>
      </div>
      <div class="float-right">
        <button :class="$message.kelas.btn_light" @click="back()">{{ $message.button.batal }}</button>
        <button :class="$message.kelas.btn_primary" @click="simpan()">{{ $message.button.simpan }}</button>
        <!-- <router-link :to="{name: 'specimen-pengangkatan'}">
          <button :class="$message.kelas.btn_main">{{ $message.button.cetak}}</button>
        </router-link> -->
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
    methods: {
         back() {
      this.$router.back();
    },
         simpan() {
      this.$router.back();
    },
}
}
</script>

<style scoped>
.pilih-btn {
  margin-top: 35px;
  width: 100px;
}

@media only screen and (max-width: 991px) {
  .pilih-btn {
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
.icon-sizes {
  width: 18px;
  margin-top: -3px;
}
</style>

