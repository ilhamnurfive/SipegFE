<script>
export default {
	data(){
		return{
			loadNIP: false,
			dataPegawai: null
		}
	},

  methods: {
     async getPegawai(val) {
      let paramsSet = {};

      if(val != undefined){
        if (val.nip) {
          paramsSet.nip = val.nip;
        }else if(val.id){
          paramsSet.id = val.id;
        }
      }

        this.loadNIP = true;
        const get = await this.$store.dispatch('get_pegawai', paramsSet);
        this.loadNIP = false;

        if (get.status) {
          let data = null
          if(get.data.data.length > 1){
            this.dataPegawai = get.data.data;
          }else{
            this.dataPegawai = get.data.data[0]
          }
          
        //   this.instansi = data.instansi.instansi;
        //   this.satuan_kerja = data.satker.satuan_kerja;
          
        }
        console.log(this.dataPegawai)

      
    },
  }
}
</script>