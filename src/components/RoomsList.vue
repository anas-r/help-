<template>
  <div class="rooms-list pt-3">
    <rooms-list-item 
      v-for="room in rooms"
      :room="room"
      :key="room.id"
    >
    </rooms-list-item>
  </div>
</template>


<script>
import axios from 'axios';
import {API_HOST} from '../config';
import RoomsListItem from './RoomsListItem';

export default {
  components: {
    RoomsListItem
  },
  name: 'RoomsList',
  data: function() {
    return {
      /* Initialize rooms with an empty array, while waiting for actual data to be retrieved from the API */
      rooms: []
    }
  },
  created: async function() {
    let response = await axios.get(`${API_HOST}/api/rooms`);
    let rooms = response.data;
    this.rooms = rooms;
  },
}
</script>

<style scoped>
.rooms-list {
  height: 500px;
  overflow-y: scroll;
}
</style>