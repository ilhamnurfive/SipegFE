 <template>
  <form-group :size="size ? size : 'col-md-3'" :title="title">
    <CInput :class="input ? input: 'col-md-5'" :placeholder="title ? title : 'Tambahkan Sesuatu' ">
      <template #append>
        <slot></slot>
      </template>
    </CInput>
  </form-group>
</template>
<script>
export default {
  created() {
    console.log(this.size);
  },
  props: ['title', 'size', 'input']
};
</script>
