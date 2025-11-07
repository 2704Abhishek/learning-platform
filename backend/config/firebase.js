const admin = require('firebase-admin');

// Replace with your Firebase service account key
const serviceAccount = require('./learning-platform-13df1-firebase-adminsdk-fbsvc-0eacff4399.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://learning-platform-13df1-default-rtdb.firebaseio.com/"
});

const db = admin.database();

module.exports = { admin, db };