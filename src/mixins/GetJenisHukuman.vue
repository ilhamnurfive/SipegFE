<script>
export default {
	data(){
		return{
			loadJenisHukuman: false,
			dataJenisHukuman: []
		}
    },
    methods: {
    async getJenisHukuman(val) {
        let paramsSet = {};
        if(val) {
            paramsSet.nama = val
        }

        this.loadJenisHukuman = true;
        const get = await this.$store.dispatch('get_jenis_hukuman', paramsSet);
        this.loadJenisHukuman = false;
        
        
        if (get.status) {
            this.dataJenisHukuman = []
            let data = get.data.data
            if (data.length) {
                data.forEach((d, idxD) => {
                this.dataJenisHukuman.push({
                    id: d.id,
                    jenis_hukuman: d.jenis_hukuman,
                });
            });
            }
        }        
    },

    }
}
</script>