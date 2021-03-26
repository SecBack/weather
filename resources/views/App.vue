<template>
<div>
  <b-button variant="outline-primary">Update database</b-button>

  {{ data }}
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      data: "",
    }
  },
  mounted() {
    axios.get("https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=439d4b804bc8187953eb36d2a8c26a02")
      .then((response) => {
        this.data = response.data['list']
      })

    axios.post("api/data", {
      name: "test",
      temp: 9.002384,
      prediction: "test prediction",
      description: "test description",
    })
      .then((response) => {
        console.log(response.data)
      })
  },
  methodes() {

  }
}
</script>
