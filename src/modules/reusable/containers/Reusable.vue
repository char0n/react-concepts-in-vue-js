<template>
  <reusable
    :counter="counter"
    @increment="onIncrement"
  />
</template>

<script>
  import { mapMutations } from 'vuex';

  import Reusable from '../components/Reusable';
  import { incrementCounter } from '../mutations';

  export default {
    props: {
      namespace: {
        type: String,
        required: true,
      },
    },
    components: {
      Reusable,
    },
    computed: {
      counter() {
        return this.$store.getters[`${this.namespace}/counter`];
      },
    },
    created() {
      const mutations = mapMutations(this.namespace, {
        onIncrement: commit => commit(incrementCounter()),
      });

      this.onIncrement = mutations.onIncrement.bind(this);
    },
  };
</script>
