<template>
  <div>
    <display class="mb-3"></display>
    <keypad class="mb-3"></keypad>
  </div>
</template>

<script>
import display from '@/components/page2/com-display.vue'
import keypad from '@/components/page2/com-keypad.vue'
export default {
  components: {
    display,
    keypad,
  },
}
</script>

<style lang="scss" scoped></style>
