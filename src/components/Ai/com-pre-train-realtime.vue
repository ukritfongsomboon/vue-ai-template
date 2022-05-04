<template>
  <div>
    <v-card outlined>
      <v-card-title>Realtime Prediction</v-card-title>
      <v-card-text>
        <video id="video"></video>
        <cnavas id="can"></cnavas>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initial()
  },
  data() {
    return {
      video: '',
    }
  },
  methods: {
    hasGetUserMedial() {
      return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
    },
    async setupCamera() {
      if (this.hasGetUserMedial()) {
        this.video = await document.getElementById('video')
        const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: true })
        this.video.srcObject = stream
      } else console.log('Not use function !!')
    },

    async setupCanvas() {
      let canvas = document.getElementById('can')

      canvas.width = this.video.videoWidth
    },
    async initial() {
      // MIan function
      // # Get Camera
      // await this.setupCamera()

      // # Play video
      // await this.video.play()
    },
  },
}
</script>

<style lang="scss" scoped></style>
