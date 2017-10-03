<template>
  <user-table :users="users" />
</template>

<script>
  import { mapGetters } from 'vuex';

  import UserTable from '../components/UserTable';


  export default {
    components: {
      UserTable,
    },
    computed: {
      ...mapGetters('feature2', {
        users: 'users',
      }),
    },
  };
</script>
