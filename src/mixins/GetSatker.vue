<script>
export default {
	data(){
		return{
			loadSatker: false,
			dataSatker: []
		}
	},

  methods: {
    async getSatuanKerja(val) {
        let paramsSet = {};

        if (val) {
            paramsSet.nama = val

            this.loadSatker = true;
            const get = await this.$store.dispatch('get_satker', paramsSet);
            this.loadSatker = false;
    
            if (get.status) {
                let data = get.data.data
                if (data.length) {
                    this.dataSatker = []
                    data.forEach((d, idxD) => {
                        this.dataSatker.push({ id: d.id, name: d.satuan_kerja});
                    });
                }
            }
        }
    },
  }
}
</script>