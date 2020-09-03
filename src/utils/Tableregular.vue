<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col" v-for="(content,index) in contents" :key="index">{{content}}</th>
      </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>
<script>
export default {
  props: ['contents']
};
</script>