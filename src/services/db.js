import firebase from "../firebase";
const db = firebase.collection("/users");
class UserDataService {
  getAll() {
    return db;
  }
  getOne(id){
    return db.doc(id).get();
  }
  create(tutorial) {
    return db.add(tutorial);
  }
  update(id, value) {
    return db.doc(id).update(value);
  }
  delete(id) {
    return db.doc(id).delete();
  }
}
export default new UserDataService();
