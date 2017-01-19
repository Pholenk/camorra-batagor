import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyD8RdSuRV72Li7bSIhLxoStJnYqa8ubfoc ",
  authDomain: "camorra-batagor.firebaseapp.com",
  databaseURL: "https://camorra-batagor.firebaseio.com",
  storageBucket: "camorra-batagor.appspot.com",
};
firebase.initializeApp(config);
export default firebase.database()
