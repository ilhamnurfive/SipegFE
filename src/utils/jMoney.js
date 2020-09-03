export default {
  methods: {
    jMoney(type, nomimal) {
      const money = {
        type: type,
        nomimal: (nomimal * 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }

      return money.type + ' ' + money.nomimal
    }
  }
}