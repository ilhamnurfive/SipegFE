<template>
  <CCardHeader>
    <h5 class="font-weight-bold">{{meta}}</h5>
  </CCardHeader>
</template>
<script>
export default {
  created() {
    this.meta = this.$router.currentRoute.meta.judul;
  },
  data() {
    return {
      meta: ''
    };
  }
};
</script>

<style  scoped>
h5 {
  font-family: 'Nunito', sans-serif;
  margin-bottom: -0px;
}
</style>