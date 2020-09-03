<template>
  <CDropdown
    inNav
    class="c-header-nav-items font-head pr-3"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar text-head">
          Dummy
          <i class="fa fa-caret-down px-2" aria-hidden="true"></i>
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>Akun</strong>
    </CDropdownHeader>
    <CDropdownItem @click="signOut" class="mt-2">
      <CIcon name="cil-lock-locked" />Keluar
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data() {
    return {
      itemsCount: 42
    };
  },
  methods: {
    signOut() {
      this.$swal
        .fire({
          title: 'Apa anda yakin?',
          text: 'Ini akan mengeluarkan anda dari Aplikasi!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#159957',
          cancelButtonText: 'Kembali',
          confirmButtonText: 'Keluar',
          customClass: 'swal-out'
        })
        .then(result => {
          if (result.value) {
            this.$router.push({ path: '/' });
            this.$toast.success('Anda berhasil keluar!');
          }
        });
      // this.$swal.fire(this.$message.dataMessage.loginSukes).then(result => {
      // });
    }
  }
};
</script>

<style>
.swal-out {
  font-family: 'Nunito' !important;
}

.image-head {
  width: 10px;
}

.font-head {
  font-family: 'Nunito';
}

.text-head {
  font-family: 'Poppins';
  color: #159957;
}

.c-icon {
  margin-right: 0.3rem;
}
</style>