<template>
  <div class="breadcrumb">
    <b-breadcrumb :items="crumbs" />
  </div>
</template>

<script>
export default {
  computed: {
    crumbs: function() {
      let pathArray = this.$route.path.split('/');
      pathArray.shift();
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        if (path != '') {
          breadcrumbArray.push({
            path: path,
            to: breadcrumbArray[idx - 1]
              ? '/' +
                breadcrumbArray
                  .map(val => {
                    return val.path;
                  })
                  .join('/') +
                '/' +
                path
              : '/' + path,
            text:
              (this.$route.matched[idx] &&
                this.$route.matched[idx].meta.breadCrumb) ||
              path
          });
        }
        return breadcrumbArray;
      }, []);
      console.log(breadcrumbs);

      return breadcrumbs;
    }
  }
};
</script>
<style scoped>
.breadcrumb {
  border-bottom: none;
  font-family: 'Nunito', sans-serif;
}

.breadcrumb a {
  font-family: 'Nunito', sans-serif;
  color: #155799;
  font-weight: 500;
  text-decoration: none;
}
</style>


