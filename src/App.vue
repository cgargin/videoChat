<template>
  <the-navigation :user="user" @logout="logout"></the-navigation>
  <router-view :user="user" @logout="logout" />
</template>
<script>
import UserDataService from "./services/db";
import Firebase from "firebase";
import TheNavigation from "./components/TheNavigation.vue";
export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      user: null,
      unsubscribe: null,
      users: [],
      currentUser: null,
    };
  },
  methods: {
    // onDataChange(items) {
    //   console.log("onDataChange");
    //   let _users = [];
    //   items.forEach((item) => {
    //     let data = item.data();
    //     this.user = data.name;
    //     _users.push({
    //       name: data.name,
    //     });
    //   });
    //   this.users = _users;
    //   console.log(_users);
    // },

    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push("/login");
        });
    },
  },
  mounted() {
    //****************************** BÜTÜN HEPSİNİ ÇEKME *************************/
    // this.unsubscribe = UserDataService.getAll()
    //   .orderBy("name", "asc")
    //   .onSnapshot(this.onDataChange);
    //****************************** BİRİNİ  ÇEKME *************************/
    // UserDataService.getOne("7uYoLy5BRDoWW188hx58").then((snapshot) => {
    //   this.user = snapshot.data().name;
    // });
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      }
    });
  },
};
</script>
<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap.scss";
</style>
