<template>
  <div>
    <v-card outlined>
      <v-data-table v-bind:headers="headers" :items="dataApi"> </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataApi: [],
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'E-mail',
          align: 'start',
          sortable: true,
          value: 'email',
        },
      ],
    }
  },
  created() {
    const options = {
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'get',
    }

    this.axios(options)
      .then((res) => (this.dataApi = res.data))
      .catch((err) => console.log(err))
  },
}
</script>

<style lang="scss" scoped></style>
