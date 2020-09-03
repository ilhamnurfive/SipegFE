
import helpers from '../helpers'
import Posting from '@/store/services/pensiun/posting'
import Listing from '@/store/services/unor/listing'

export const state = () => ({
    dataUnorAll : []
});

export const  mutations = {
    isiDataList(state, payload) {
        state.dataUnorAll = payload;
    },
   

}

export const getters = {
    allUnor: state => {
        return state.dataUnorAll
      }
};

export const actions = {
    listDataUnor({ commit }) {
    //    let search = typeof payload.cari != 'undefined' ? payload.cari:''
    //     var data = {
    //         page: state.page,
    //         cari : search,
    //         jumlah : payload.jumlah
    //     };
        return new Promise((resolve) => {
            let list = []
            Listing.list_unor() //axios.get(url = http:127.0.0.1:20000/api/v1/usul-mpp)
                .then((response) => {
                    let data = response.data.data;
                    if(response.data.code == '200'){
                        if (data.length) {
                            data.forEach((d, idxD) => {
                                list.push({
                                id: d.unorId,
                                name: d.namaUnor,
                               
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
  

}


