<template>
  <div class="not-found mx-auto">
    <h1 class="big-404">404</h1>
    <h2 class="text">Halaman tidak ditemukan!</h2>
    <h5 class="small-text">Halaman yang anda cari tidak ada atau tidak tersedia.</h5>
    <button
      @click="() => {this.$router.push('/pengembangan')}"
      class="btn btn-back"
    >Kembali Ke Halaman Awal</button>
  </div>
</template>


<style lang="scss" scoped>
.not-found {
  width: 100%;
  min-height: 100vh;
  padding: 15px;
  background: white;
  text-align: center;
  font-family: 'Nunito';

  .text {
    font-family: 'Nunito';
    margin-top: -50px;
    font-weight: 700;
    font-size: 5vh;
    color: rgb(59, 58, 58);
  }

  .small-text {
    font-weight: 300;
  }

  .big-404 {
    margin-top: 50px;
    font-weight: bold;
    font-size: 20rem;
    background: -webkit-linear-gradient(to bottom, #155799, #159957);
    background: linear-gradient(to bottom, #155799, #159957);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media only screen and (max-width: 600px) {
    .big-404 {
      margin-top: 50px;
      margin-bottom: 30px;
      font-weight: bold;
      font-size: 10rem;
      background: -webkit-linear-gradient(to bottom, #155799, #159957);
      background: linear-gradient(to bottom, #155799, #159957);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .btn-back {
    margin-top: 50px;
    color: #fff;
    font-size: 20px;
    background: #159957;
  }
}
</style>