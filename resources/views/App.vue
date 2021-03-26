<template>
<div>
  <b-table striped hover :items="data"></b-table>
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
        let dbData = response.data['list']

        dbData.forEach(element => {
          console.log(element.name)
          console.log(element.main.temp)
          console.log(element['weather'][0].main)
          console.log(element.weather[0].description)

          axios.post("api/data", {
            name: element.name,
            temp: element.main.temp,
            prediction: element['weather'][0].main,
            description: element.weather[0].description,
          })
        });
      })

    axios.get("api/data")
      .then((response) => {
        this.data = response.data
      })

  },
  methodes() {

  }
}
</script>
