<template>
  <div class="heaters-list pt-3">
    <heaters-list-item 
      v-for="heater in heaters"
      :heater="heater"
      :key="heater.id"  
      @heater-updated="updateHeater"
    >
    </heaters-list-item>
  </div>
</template>


<script>
import axios from 'axios';
import {API_HOST} from '../config';
import HeatersListItem from './HeatersListItem';

export default {
  components: {
    HeatersListItem
  },
  name: 'HeatersList',
  data: function() {
    return {
      /* Initialize heaters with an empty array, while waiting for actual data to be retrieved from the API */
      heaters: []
    }
  },
  created: async function() {
    let response = await axios.get(`${API_HOST}/api/heaters`);
    let heater = response.data;
    this.heaters = heater;
  },
  methods: {
    updateHeater(newHeater) {
      /* Find the place of heater objectw ith the same Id in the array, and replace it */
      let index = this.heaters.findIndex(heater => heater.id === newHeater.id);
      this.heaters.splice(index, 1, newHeater);
    }
  }
}
</script>

<style scoped>
.heaters-list {
  height: 500px;
  overflow-y: scroll;
}
</style>