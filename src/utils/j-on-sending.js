export default {
  methods: {
    /**
     * 
     * @param {Boolean} params.status
     * @param {String} params.text
     * @param {String} params.proc

     */
    j_onSending(params) {
      if (params.status) {
        return `<i class="fa fa-refresh fa-spin"></i> ${params.proc}`
      } else return params.text
    }
  }
}