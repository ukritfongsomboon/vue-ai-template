<template>
  <div>
    <v-card outlined>
      <v-card-text class="text-h1"> {{ $store.getters.count }} </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
