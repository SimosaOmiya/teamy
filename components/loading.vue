<template>
  <div class="loading-page text-center" v-if="loading">
    <b-spinner variant="mikoi" type="grow" label="Spinning"></b-spinner>
    <b-spinner variant="ayasa" type="grow" label="Spinning"></b-spinner>
    <b-spinner variant="aimi" type="grow" label="Spinning"></b-spinner>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>

<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    padding-top: 200px;
  }
</style>