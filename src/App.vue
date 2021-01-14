<template>
  
  <div id="app">
    <header>
      <div class="title"><h3>{{title}}</h3></div>
     
    </header>
    
    <section class="main-content w-50 mx-auto">

      <img src="./CaptureFaircorpLogo.jpeg" alt="Faircorp logo" > <br>    
     
      <main-navigation></main-navigation>
      <main-forms></main-forms> 
    </section>
    <section class="main-content w-50 mx-auto">
    <div id="app-vue">
      <div class="windows">
        <button class="btn btn-primary" @click="fetchWindows">
          Fetch Windows
        </button>
	
	<h3>Create or Modificate Window :</h3>
        
        <label>Window Id :    </label><br>
        <input
          class="add-search-input"
          type="text"
          placeholder="Type the Id of the window to modif"
          v-model="idWindow"
          
        ><br>
        <label>Name Window : </label><br>
        <input
          class="add-search-input"
          type="text"
          v-model="newWindow"
         
        ><br>
        
        <label>Window Status : </label><br>
        <input
          class="add-search-input"
          type="text"
          v-model="statusWindow"
         
        ><br>
 	
 	<label>Room Id :    </label><br>
        <input
          class="add-search-input"
          type="text"
          v-model="roomId"
          
        ><br>
        <label>Room Name : </label><br>
        <input
          class="add-search-input"
          type="text"
          v-model="roomName"
          
        ><br>
        <button class="btn btn-primary" @click="addWindow">
          add Window
        </button> <br>

	<button class="btn btn-primary" @click="modifWindow">
          Modificate Window
        </button>
        <div>
          <p v-if="submitting">Submitting...</p>
          <p v-if="loading">Loading...</p>

          <ul>
            <li v-for="window in windows">
              {{ window.name }} : {{ window.id }}
            </li>
          </ul>
        </div><br><hr>
        
        
        
        
        
        
        <div class="rooms">
        <button class="btn btn-primary" @click="fetchRooms">
          Fetch Rooms
        </button>
	
	<h3>Create Room :</h3>
        
        <label>Room Name : </label><br>
        <input
          class="add-search-input"
          type="text"
          v-model="newRoom"
         
        ><br>
        
        <label>Floor Id : </label><br>
        <input
          class="add-search-input"
          type="text"
          v-model="floorId"
         
        ><br>
 	
 	<label>Current Temperature :    </label><br>
        <input
          class="add-search-input"
          type="text"
          v-model="currentTemp"
          
        ><br>
        <label>Target Temperature : </label><br>
        <input
          class="add-search-input"
          type="text"
          v-model="targetTemp"
          
        ><br>
        <button class="btn btn-primary" @click="addRoom">
          add Room
        </button>

        <div>
          <p v-if="submitting">Submitting...</p>
          <p v-if="loading">Loading...</p>

          <ul>
            <li v-for="room in rooms">
              {{ room.name }} : {{ room.id }}
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
   </section>
  </div>
  
</template>

<script>
import axios from 'axios';
import MainNavigation from './components/MainNavigation.vue';
import MainForms from './components/MainForms.vue';

export default {
  
  name: 'App',
  components: {
    MainNavigation,
    MainForms
  },
  data: function() {
    return {
      title: '',
      windows: [],
      loading: false,
      submitting: false,
      idWindow: '',
      newWindow: '',
      newStatusWindow:'',
      roomId:'',
      roomName:'',
      rooms : [],
      newRoom:'',
      floorId:'',
      currentTemp:'',
      targetTemp:''
      
    }
  },
  methods: {
    fetchWindows() {
      this.loading = true;
      this.windows = [];

      axios.get('https://faircorp-alexis-renier-robin.cleverapps.io/api/windows')
        .then((response) => {
          const data = response.data;
          this.windows = data;
          this.loading = false;
        });
    },
    addWindow() {
      this.submitting = true;
      axios.post('https://faircorp-alexis-renier-robin.cleverapps.io/api/windows', {
        id: null,
  	name: this.newWindow,
 	roomId: this.roomId,
 	roomName: this.roomName,
  	windowStatus: this.statusWindow
        //name: this.newUser
      })
        .then((response) => {
          const data = response.data;
          this.windows.push(data);
          this.newWindow = '';
          this.statusWindow ='';
      	  this.roomId = '';
      	  this.roomName = '';
          
          
          this.submitting = false;
        });
    },
    async deleteWindow() {
      let response = await axios.delete(`${API_HOST}/api/heaters/${this.idWindow}`);
      let updatedWindow = response.data;
      this.$emit('window-updated', updatedWindow);
    
    },
    modifWindow() {
      //deleteWindow();
      this.submitting = true;
      axios.post('https://faircorp-alexis-renier-robin.cleverapps.io/api/windows', {
        id: null,
  	name: this.newWindow,
 	roomId: this.roomId,
 	roomName: this.roomName,
  	windowStatus: this.statusWindow
        //name: this.newUser
      })
        .then((response) => {
          const data = response.data;
          this.windows.push(data);
          this.newWindow = '';
          this.statusWindow ='';
      	  this.roomId = '';
      	  this.roomName = '';
          
          
          this.submitting = false;
        });
    },
    
    fetchRooms() {
      this.loading = true;
      this.rooms = [];

      axios.get('https://faircorp-alexis-renier-robin.cleverapps.io/api/rooms')
        .then((response) => {
          const data = response.data;
          this.rooms = data;
          this.loading = false;
        });
    },
    addRoom() {
      this.submitting = true;
      axios.post('https://faircorp-alexis-renier-robin.cleverapps.io/api/rooms', {
        currentTemperature: this.currentTemp,
  	floorId : this.floorId ,
  	id: null,
  	name: this.newRoom,
  	targetTemperature: this.targetTemp
        //name: this.newUser
      })
        .then((response) => {
          const data = response.data;
          this.rooms.push(data);
          this.newRoom = '';
          this.currentTemp ='';
      	  this.targetTemp = '';
      	  this.floorId = '';
          
          
          this.submitting = false;
        });
    }
  }
  
  
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
