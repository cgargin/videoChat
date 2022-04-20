<template>
  <the-navigation :user="user" @logout="logout"></the-navigation>
  <router-view
    :user="user"
    :rooms="rooms"
    @logout="logout"
    @addRoom="addRoom"
    @deleteRoom="deleteRoom"
  />
</template>
<script>
import firebase from "./firebase";
const userDb = firebase.collection("/users");
import Firebase from "firebase";
import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,

  },
  data() {
    return {
      user: null,
      rooms: [],
    };
  },
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push("/login");
        });
    },
    addRoom(roomName) {
      userDb.doc(this.user.uid).collection("rooms").add({
        name: roomName,
        createdAt: Firebase.firestore.FieldValue.serverTimestamp(),
      });
    },
    deleteRoom(roomId) {
      userDb.doc(this.user.uid).collection("rooms").doc(roomId).delete();
    },
  },
  mounted() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        userDb
          .doc(this.user.uid)
          .collection("rooms")
          .onSnapshot((snapshot) => {
            const snapData = [];
            snapshot.forEach((doc) => {
              snapData.push({
                id: doc.id,
                name: doc.data().name,
              });
            });
            this.rooms = snapData.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              } else {
                return 1;
              }
            });
          });
      }
    });
  },
};
</script>
<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap.scss";
</style>
