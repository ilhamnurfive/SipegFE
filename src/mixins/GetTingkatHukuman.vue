<script>
export default {
	data(){
		return{
			loadTingkatHukuman: false,
			dataTingkatHukuman: []
		}
    },
    methods: {
    async getTingkatHukuman(val) {
        let paramsSet = {};
        if(val) {
            paramsSet.nama = val
        }

        this.loadTingkatHukuman = true;
        const get = await this.$store.dispatch('get_tingkat_hukuman', paramsSet);
        this.loadTingkatHukuman = false;
        
        
        if (get.status) {
            this.dataTingkatHukuman = []
            let data = get.data.data
            if (data.length) {
                data.forEach((d, idxD) => {
                this.dataTingkatHukuman.push({
                    id: d.id,
                    tingkat_hukuman: d.tingkat_hukuman,
                });
            });
            }
        }        
    },

    }
}
</script>