<template>
  <div>
    <v-card outlined>
      <v-card-title>Keras To TensoflowJS</v-card-title>
      <v-card-text>
        <div>
          <v-file-input
            accept="image/*"
            label="input image file"
            outlined
            color="primary"
            dense
            prepend-inner-icon="mdi-camera"
            prepend-icon=""
            single-line
            @change="Upload"
          >
          </v-file-input>
        </div>
        <div v-show="urlImg != ''">
          <img id="img" :src="urlImg" alt="" />
        </div>
        <div v-show="urlImg != ''">Resualt : {{ outputAi }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  async created() {
    this.model = await window.tf.loadLayersModel('/model/model.json')
  },
  data() {
    return {
      urlImg: '',
      outputAi: '',
    }
  },

  methods: {
    Upload(e) {
      // TODO Create url image
      this.urlImg = URL.createObjectURL(e)

      // TODO Get element image
      let image = document.getElementById('img')

      setTimeout(async () => {
        let imageNew = await window.tf.browser
          .fromPixels(image)
          .resizeBilinear([28, 28])
          .slice([0, 0, 0], [28, 28, 1])
          .toFloat()
          .reshape([1, 28, 28, 1])

        let pre = await this.model.predict(imageNew).data()
        this.outputAi = pre.indexOf(Math.max(...pre))
      }, 50)
    },
  },
}
</script>

<style lang="css" scoped>
#img {
  height: 300px;
  width: auto;
}
</style>
