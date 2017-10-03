<template>
  <tr>
    <td>{{ user.name }}</td>
    <td>{{ user.surname }}</td>
    <td>{{ user.email }}</td>
    <td>{{ prop }}</td>
  </tr>
</template>

<script>
  import { mapGetters } from 'vuex';


  export default {
    name: 'UserTableRow',
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
    computed: {
      ...mapGetters({
        prop: 'globalProp',
      }),
    },
  };
</script>
