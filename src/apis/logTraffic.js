const firebase = require('firebase')
require('firebase/firebase-firestore')

const {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
} = process.env;

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
}

module.exports = logTraffic = ({ timestamp, data }) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  console.log("log traffic called")
  
  firebase.firestore().collection("traffic").doc(`${timestamp}`).set(data)
    .then(function () {
      console.log("Write success")
    })
    .catch(function (error) {
      console.log(error)
    });
}