<script>
export default {
	data(){
		return{
			loadDasarPeraturan: false,
			dataDasarPeraturan: []
		}
    },
    methods: {
    async getDasarPeraturan(val) {
        let paramsSet = {};
        if(val) {
            paramsSet.nama = val
        }

        this.loadDasarPeraturan = true;
        const get = await this.$store.dispatch('get_dasar_peraturan', paramsSet);
        this.loadDasarPeraturan = false;
        
        
        if (get.status) {
            this.dataDasarPeraturan = []
            let data = get.data.data
            if (data.length) {
                data.forEach((d, idxD) => {
                this.dataDasarPeraturan.push({
                    id: d.id,
                    dasar_peraturan: d.dasar_peraturan,
                });
            });
            }
        }        
    },

    }
}
</script>