<template>
  <div>
    <v-card outlined>
      <v-card-text>
        <v-row>
          <v-col>
            <v-btn
              color="btnAdd"
              class="white--text text-h4"
              block
              @click="$store.commit('add', 5)"
              >+</v-btn
            >
          </v-col>
          <v-col>
            <v-btn
              color="btnSub"
              class="white--text text-h4"
              block
              @click="$store.dispatch('subCount', 5)"
              >-</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
