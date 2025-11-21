const admin = require('firebase-admin');

// Replace with your Firebase service account key
const serviceAccount = require('C:/Users/Acer/Downloads/learning-platform-13df1-firebase-adminsdk-fbsvc-d677349659.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://learning-platform-13df1-default-rtdb.firebaseio.com/"
});

const db = admin.database();

module.exports = { admin, db };