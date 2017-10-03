<template>
  <table border="1" style="margin: auto">
    <thead>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Global prop</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="user in users">
        <user-table-row :user="user" />
      </template>
    </tbody>
  </table>
</template>

<script>
  import UserTableRow from '../components/UserTableRow';


  export default {
    name: 'user-table',
    components: {
      'user-table-row': UserTableRow,
    },
    props: {
      users: {
        type: Array,
        required: true,
      },
    },
  };
</script>
