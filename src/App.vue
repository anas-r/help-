<template>
  <div id="app">
    <header>
      <div class="title">
        <h3>{{ title }}</h3>
      </div>
    </header>

    <section class="main-content mx-auto">
      <img src="./CaptureFaircorpLogo.jpeg" alt="Faircorp logo" />
      <main-navigation></main-navigation>
      <main-forms></main-forms>
    </section>
    <section class="main-content my-auto">
      <div id="app-vue">
        <div class="windows">
          <button class="btn btn-primary" @click="fetchWindows">
            Fetch windows
          </button>

          <h3>Create or edit windows</h3>

          <label>Window ID</label>
          <input
            class="add-search-input"
            type="text"
            placeholder="Type the ID of the window to edit"
            v-model="idWindow"
          />
          <label>Window name</label>
          <input class="add-search-input" type="text" v-model="newWindow" />

          <label>Window status</label>
          <input class="add-search-input" type="text" v-model="statusWindow" />

          <label>Room ID</label>
          <input class="add-search-input" type="text" v-model="roomId" /><br />
          <label>Room name</label>
          <input class="add-search-input" type="text" v-model="roomName" />
          <div class="btns">
            <button class="btn btn-success" @click="addWindow">
              Add window
            </button>
            <button class="btn btn-primary" @click="modifWindow">
              Edit window
            </button>
          </div>
          <div>
            <p v-if="submitting">Submitting...</p>
            <p v-if="loading">Loading...</p>

            <ul>
              <li v-for="window in windows">
                {{ window.name }} : {{ window.id }}
              </li>
            </ul>
          </div>
        </div>

        <div class="rooms">
          <button class="btn btn-primary" @click="fetchRooms">
            Fetch rooms
          </button>

          <h3>Create room</h3>

          <label>Room name</label>
          <input class="add-search-input" type="text" v-model="newRoom" />

          <label>Floor ID</label>
          <input class="add-search-input" type="text" v-model="floorId" />

          <label>Current temperature</label>
          <input class="add-search-input" type="text" v-model="currentTemp" />
          <label>Target temperature</label>
          <input class="add-search-input" type="text" v-model="targetTemp" />
          <div class="btns">
            <button class="btn btn-primary btn-success" @click="addRoom">
              Add room
            </button>
          </div>

          <div>
            <p v-if="submitting">Submitting...</p>
            <p v-if="loading">Loading...</p>

            <ul>
              <li v-for="room in rooms">{{ room.name }} : {{ room.id }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import MainNavigation from "./components/MainNavigation.vue";
import MainForms from "./components/MainForms.vue";

export default {
  name: "App",
  components: {
    MainNavigation,
    MainForms,
  },
  data: function () {
    return {
      title: "",
      windows: [],
      loading: false,
      submitting: false,
      idWindow: "",
      newWindow: "",
      newStatusWindow: "",
      roomId: "",
      roomName: "",
      rooms: [],
      newRoom: "",
      floorId: "",
      currentTemp: "",
      targetTemp: "",
    };
  },
  methods: {
    fetchWindows() {
      this.loading = true;
      this.windows = [];

      axios
        .get("https://faircorp-alexis-renier-robin.cleverapps.io/api/windows")
        .then((response) => {
          const data = response.data;
          this.windows = data;
          this.loading = false;
        });
    },
    addWindow() {
      this.submitting = true;
      axios
        .post(
          "https://faircorp-alexis-renier-robin.cleverapps.io/api/windows",
          {
            id: null,
            name: this.newWindow,
            roomId: this.roomId,
            roomName: this.roomName,
            windowStatus: this.statusWindow,
            //name: this.newUser
          }
        )
        .then((response) => {
          const data = response.data;
          this.windows.push(data);
          this.newWindow = "";
          this.statusWindow = "";
          this.roomId = "";
          this.roomName = "";

          this.submitting = false;
        });
    },
    async deleteWindow() {
      let response = await axios.delete(
        `${API_HOST}/api/heaters/${this.idWindow}`
      );
      let updatedWindow = response.data;
      this.$emit("window-updated", updatedWindow);
    },
    modifWindow() {
      //deleteWindow();
      this.submitting = true;
      axios
        .post(
          "https://faircorp-alexis-renier-robin.cleverapps.io/api/windows",
          {
            id: null,
            name: this.newWindow,
            roomId: this.roomId,
            roomName: this.roomName,
            windowStatus: this.statusWindow,
            //name: this.newUser
          }
        )
        .then((response) => {
          const data = response.data;
          this.windows.push(data);
          this.newWindow = "";
          this.statusWindow = "";
          this.roomId = "";
          this.roomName = "";

          this.submitting = false;
        });
    },

    fetchRooms() {
      this.loading = true;
      this.rooms = [];

      axios
        .get("https://faircorp-alexis-renier-robin.cleverapps.io/api/rooms")
        .then((response) => {
          const data = response.data;
          this.rooms = data;
          this.loading = false;
        });
    },
    addRoom() {
      this.submitting = true;
      axios
        .post("https://faircorp-alexis-renier-robin.cleverapps.io/api/rooms", {
          currentTemperature: this.currentTemp,
          floorId: this.floorId,
          id: null,
          name: this.newRoom,
          targetTemperature: this.targetTemp,
          //name: this.newUser
        })
        .then((response) => {
          const data = response.data;
          this.rooms.push(data);
          this.newRoom = "";
          this.currentTemp = "";
          this.targetTemp = "";
          this.floorId = "";

          this.submitting = false;
        });
    },
  },
};
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

.main-content {
  margin: auto;
}

label {
  display: block;
}

.btns {
  margin: 25px;

  > * {
    margin: 0 5px;
  }
}

.rooms,
.windows {
  margin: 30px;
  border-radius: 50px;
  padding: 50px;
  box-shadow: 0px 15px 40px 8px rgba(0,0,0,0.1);
  transition: all .3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 25px 60px 8px rgba(0,0,0,0.2);
    transition: all .3s ease-in-out;
  }
}


#app-vue {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 50px max(50px, min(200px, 20%));
}
</style>
