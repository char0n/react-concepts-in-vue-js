<template>
  <ajax
    :server-data="serverData"
    :server-data-fetching="serverDataFetching"
    @server-data-load="onServerDataDownload"
  />
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  import Ajax from '../components/Ajax';
  import { fetchServerData } from '../actions';


  export default {
    components: {
      Ajax,
    },
    computed: {
      ...mapGetters('feature1', {
        serverData: 'serverData',
        serverDataFetching: 'serverDataFetching',
      }),
    },
    methods: {
      ...mapActions('feature1', {
        onServerDataDownload: (dispatch, params) => dispatch(fetchServerData(params)),
      }),
    },
  };
</script>
