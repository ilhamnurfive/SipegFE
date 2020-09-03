<script>
export default {
	data(){
		return{
			loadInstansi: false,
			dataInstansi: []
		}
    },
    methods: {
    async getInstansi(val) {
        let paramsSet = {};

        if(val) {
            paramsSet.nama = val

            this.loadInstansi = true;
            const get = await this.$store.dispatch('get_instansi', paramsSet);
            this.loadInstansi = false;
    
            if (get.status) {
                this.dataInstansi = []
                let data = get.data.data
                if (data.length) {
                    data.forEach((d, idxD) => {
                    this.dataInstansi.push({
                    id: d.id,
                    name: d.instansi,
                    });
                });
                }
            }
        }
    },

    }
}
</script>