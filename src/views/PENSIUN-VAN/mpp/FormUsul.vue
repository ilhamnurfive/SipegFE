<template>
  <CCard>
    <content-header />
    <ValidationObserver>
      <form @submit.prevent>
        <CCardBody>
          <div class="p-4">
            <!-- <validation-provider rules="required" v-slot="{ errors }">
              <CRow>
                <label :class="$message.kelas.label">Instansi</label>
                <div :class="$message.kelas.input">
                  <multiselect
                    :options="dataInstansi"
                    :class="errors[0] ? 'invalid' : null"
                    placeholder="Instansi"
                    :showLabels="false"
                    label="name"
                  >
                    <span slot="noResult">Data tidak ditemukan!</span>
                  </multiselect>
                  <small class="text-danger">{{ errors[0] }}</small>
                </div>
              </CRow>
            </validation-provider> -->
            <!-- <validation-provider rules="required" v-slot="{ errors }">
              <CRow>
                <label :class="$message.kelas.label">Satuan Kerja</label>
                <div :class="$message.kelas.input">
                  <multiselect
                    :options="dataSatker"
                    :class="errors[0] ? 'invalid' : null"
                    placeholder="Satuan Kerja"
                    :showLabels="false"
                    label="name"
                  >
                    <span slot="noResult">Data tidak ditemukan!</span>
                  </multiselect>
                  <small class="text-danger">{{ errors[0] }}</small>
                </div>
              </CRow>
            </validation-provider> -->
            <form-auto
              title="Nomor Usul"
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              v-model ="usulan.no_usul"
            ></form-auto>
           
            <form-auto
              title="Tanggal Usul"
              input="date"
              :kelastitle="$message.kelas.label "
              :kelasform="$message.kelas.input"
              v-model ="usulan.tanggal_usul"
            ></form-auto>
            <form-auto
              title="Tahun"
              input="input"
              :kelastitle="$message.kelas.label "
              :kelasform="$message.kelas.input"
               v-model ="usulan.tahun"
            ></form-auto>
          </div>
          <div class="container">
            <div class="row justify-content-md-end justify-content-center">
              <button
                @click="back()"
                class="my-2"
                :class="$message.kelas.btn_light"
              >{{ $message.button.kembali }}</button>
              <!-- <router-link :to="{name: 'tambah-pegawai-kgb'}"> -->
                <button :class="$message.kelas.btn_main" @click="sendData()" >{{ $message.button.buat}} Usul</button>
              <!-- </router-link> -->
            </div>
          </div>
        </CCardBody>
      </form>
    </ValidationObserver>
  </CCard>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  created(){
    if(this.$route.params.aksi == 'edit'){

    }else if (this.$route.params.aksi == 'tambah'){

    }else if(this.$route.params.aksi == 'ubah'){
          this.getOne();
    }
  },
  data() {
    return {
      usulan : {
        no_usul     : "",
        tanggal_usul    : "",
        tahun  : "",
        id          : ""
      }
    }
  },
  computed : {
    //  ...mapState('mpp', ['dataMpp']),
  },
  methods: {
    ...mapActions('mpp',['send','getDataOne']),
    back() {
      this.$router.back();
    },
    async getOne(){
      await this.getDataOne(this.$route.params.id).then(res=>{
          this.usulan.no_usul = res.no_usul
          this.usulan.tanggal_usul = res.tanggal_usul
          this.usulan.tahun = res.tahun
          this.usulan.id = res.id
      })
    },
    async sendData() {
        await this.send(this.usulan).then((res) => {
                        if(res.code == 201 || res.code == 200){
                              this.$swal({
                                title:"Selamat!",
                                text: "Usul MPP Berhasil Di Buat",
                                type: "success",
                                onClose: () => {
                                        // this.$router.push({ name: 'tambah-pegawai-mpp' ,params : {id : res.data.id}})
                                        this.$router.push({ name: 'list-mpp' })
                                    }
                            })
                        }
                        else{
                          this.$swal({
                                title:"Gagal!",
                                text: "Usul MPP Gagal Di Buat",
                                type: "error",
                                onClose: () => {
                                        this.$router.push({ name: 'list-mpp' })
                                    }
                            })
                        }
                    })
    }
  }
};
</script>

<style scoped>
</style>