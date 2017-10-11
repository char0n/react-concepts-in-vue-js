<template>
  <div>
    <h2>Reusable</h2>
    <div>
      <button @click="onIncrement">
        Increment
      </button>
      <span>{{ counter }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'reusable',
    props: {
      counter: {
        type: Number,
        required: true,
      },
    },
    methods: {
      onIncrement() {
        this.$emit('increment');
      },
    },
  };
</script>

<style scoped>
</style>
