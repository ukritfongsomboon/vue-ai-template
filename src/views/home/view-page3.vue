<template>
  <div>
    <kerastotfjs class="mb-3"></kerastotfjs>
    <pretrain class="mb-3"></pretrain>
    <realtime></realtime>
  </div>
</template>

<script>
import kerastotfjs from '../../components/Ai/com-keras-to-tfjs.vue'
import pretrain from '../../components/Ai/com-pre-train.vue'
import realtime from '../../components/Ai/com-pre-train-realtime.vue'
export default {
  components: {
    kerastotfjs,
    pretrain,
    realtime,
  },
}
</script>

<style lang="scss" scoped></style>
