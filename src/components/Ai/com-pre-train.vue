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
          <img id="imgPre" :src="urlImg" alt="" />
        </div>
        <ul>
          <li v-for="item in outputAi" :key="item.score">{{ item.class }} | {{ item.score }}</li>
        </ul>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
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
      let image = document.getElementById('imgPre')

      setTimeout(async () => {
        window.cocoSsd.load().then((model) => {
          model.detect(image).then((pre) => {
            this.outputAi = pre
          })
        })
      }, 50)
    },
  },
}
</script>

<style lang="css" scoped>
#imgPre {
  height: 300px;
  width: auto;
}
</style>
