<template>
  <ul class="nav nav-tabs" >
    
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" @click="toggleExpandRooms"> Rooms</a>
      <rooms-list v-if="isExpandedforRooms"></rooms-list>
    </li>
    <br>
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" @click="toggleExpandWindows"> Windows</a>
      <windows-list v-if="isExpandedforWindows"></windows-list>
    </li>
    <br>
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" @click="toggleExpandHeaters">Heaters</a>
      <heaters-list v-if="isExpandedforHeaters"></heaters-list>
    </li>
  </ul>

</template>


<script>
import WindowsList from './WindowsList.vue';
import HeatersList from './HeatersList.vue';
import RoomsList from './RoomsList.vue';
export default {
  name: 'MainNavigation',
  components: {
 	WindowsList,
 	HeatersList,
 	RoomsList
  },
  data: function() {
    return {
      isExpandedforWindows: true,
      isExpandedforHeaters: true,
      isExpandedforRooms: true
    }
  },
  methods: {
    toggleExpandWindows() {
      this.isExpandedforWindows = !this.isExpandedforWindows;
    },
    toggleExpandHeaters() {
      this.isExpandedforHeaters = !this.isExpandedforHeaters;
    },
    toggleExpandRooms() {
      this.isExpandedforRooms = !this.isExpandedforRooms;
    },
    
  }
}
</script>
