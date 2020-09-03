<script>
export default {
	data(){
		return{
			loadDugaanPelanggaran: false,
			dataDugaanPelanggaran: []
		}
    },
    methods: {
    async getDugaanPelanggaran(val) {
        let paramsSet = {};
        if(val) {
            paramsSet.nama = val
        }

        this.loadDugaanPelanggaran = true;
        const get = await this.$store.dispatch('get_dugaan_pelanggaran', paramsSet);
        this.loadDugaanPelanggaran = false;
        
        
        if (get.status) {
            this.dataDugaanPelanggaran = []
            let data = get.data.data
            if (data.length) {
                data.forEach((d, idxD) => {
                this.dataDugaanPelanggaran.push({
                    id: d.id,
                    dugaan_pelanggaran: d.dugaan_pelanggaran,
                });
            });
            }
        }        
    },

    }
}
</script>