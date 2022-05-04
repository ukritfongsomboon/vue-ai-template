<template>
  <v-navigation-drawer v-model="drawer" app clipped bottom>
    <v-list nav dense>
      <v-list-item-group active-class="primary" class="text1--text">
        <v-list-item v-for="item in menu" :key="item.name" :to="{ name: item.name }">
          <v-list-item-title>
            <v-icon>{{ item.icon }}</v-icon>
            {{ item.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    drawer: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
