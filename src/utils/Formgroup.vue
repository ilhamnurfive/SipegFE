 <template>
  <CRow>
    <CCol>
      <CRow class>
        <label :class="size ? size : 'col-md-3'" for>{{title}}</label>
        <slot></slot>
      </CRow>
    </CCol>
  </CRow>
</template>
<script>
export default {
  props: ['title', 'size']
};
</script>
