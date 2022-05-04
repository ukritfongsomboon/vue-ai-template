<template>
  <v-app-bar elevation="4" color="primary" app clipped-left>
    <v-app-bar-nav-icon class="text1--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title class="text1--text">{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="pt-6">
      <v-switch color="text1" inset v-model="$vuetify.theme.dark"></v-switch>
    </div>
    <v-btn color="secondary" v-on:click="$emit('logout', '')">Logout</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Undefind',
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
