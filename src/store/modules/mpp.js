
import helpers from '../helpers'
import Posting from '@/store/services/pensiun/posting'
import Listing from '@/store/services/pensiun/listing'

export const state = () => ({
    listDataMpp : [],
    dataMpp : {
        testing : ""
    },
    usulan : {
        tanggalUsul : "",
        nomorUsul   : "",
        tahunUsul   : "",
        id          : ""
    },
    listDataPegawai : []
});

export const  mutations = {
    isiDataList(state, payload) {
        state.listDataMpp = payload;
    },
    isiDataFormUsul(state,payload){
        state.usulan.tanggalUsul = payload.tanggal_usul;
        state.usulan.nomorUsul = payload.no_usul;
        state.usulan.tahunUsul = payload.tahun;
        state.usulan.id        = payload.id;
    }

}

export const getters = {
  
};

export const actions = {
    listData({ commit }) {
       // let search = typeof payload.cari != 'undefined' ? payload.cari:''
        // var data = {
        //     page: state.page,
        //     cari : search,
        //     jumlah : payload.jumlah
        // };
        return new Promise((resolve) => {
            let list = []
            Listing.list_data_usul_mpp() //axios.get(url = http:127.0.0.1:20000/api/v1/usul-mpp)
                .then((response) => {
                    let data = response.data.data;
                    if(response.data.code == '200'){
                        if (data.length) {
                            data.forEach((d, idxD) => {
                                list.push({
                                id: d.id,
                                noUsul: d.no_usul,
                                no: idxD + 1,
                                // tglUsul: d.tanggal_usul.split("-").reverse().join("-"),//YYYY-mm-dd -> dd-mm-YYYY
                                tglUsul: d.tanggal_usul,
                                tahunUsul: d.tahun
                            });
                            });
                        } 
                        commit('isiDataList',list)
                        resolve(list)  
                    }
                }).catch(e => {
                    console.log(e)
                        resolve(e)
                })       
            })
        
    },
    getDataOne({ commit },payload) {
         return new Promise((resolve) => {
             let list = []
             Listing.get_one_data_usul_mpp(payload)
                 .then((response) => {
                     let data = response.data.data;
                     if(response.data.code == '200'){
                        //  commit('isiDataFormUsul',data)
                         resolve(data)  
                     }
                 }).catch(e => {
                     console.log(e)
                         resolve(e)
                 })       
             })
         
     }, 
    send({commit},payload){
        if(payload.id){
            console.log('testin')
            return new Promise((resolve) => {
                Posting.patch(payload)
                .then((response) => {
                    resolve(response.data)
                }).catch(e => {
                    resolve(e)        
                })
              
                        
                })
        }else{
            return new Promise((resolve) => {
                Posting.postUsul(payload)
                .then((response) => {
                    resolve(response.data)
                }).catch(e => {
                    resolve(e)        
                })
              
                        
                })
        }
        
    } 


}


