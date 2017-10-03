<template>
  <div>
    <h2>Feature 1</h2>
    <div>
      <button
        @click="onServerDataDownload"
        :disabled="serverDataFetching"
      >
        Download data
      </button>
    </div>
    <div>
      Server data: {{ serverData }}
    </div>
    <div>
      Server data fetching: {{ serverDataFetching }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ajax-component',
  props: {
    serverData: {
      type: Object,
      default: null,
    },
    serverDataFetching: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    params() {
      return { productId: 1 };
    },
  },
  methods: {
    onServerDataDownload() {
      this.$emit('server-data-load', this.params);
    },
  },
};
</script>

<style scoped>
</style>
