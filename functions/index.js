const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var admin = require("firebase-admin");

var serviceAccount = require("./cov-protect-firebase-adminsdk-wqt6p-fc18fdc883.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cov-protect.firebaseio.com"
});

const db = admin.firestore();

app.get('/stations', (request, response) => {
      let res = [];
      db.collection('stations')
          .get()
          .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                  let document = {
                      id: doc.id,
                      data: doc.data()
                  }
                  res.push(document)
              })
              return response.send(res)
          })
          .catch ((error) => {
              return response.send("Error getting documents: ", error);
          })
  })


app.get('/hello', (request, response) => {
    return response.send('Hello world2');
});

app.post('/addStation', (request, response) => {
      const data = request.body;
      return response.send('POST metoda -> Add '+ JSON.stringify(data));
  });

  app.put('/updateStation', (request, response) => {
        const data = request.body;     
        return response.send('PUT metoda -> Change '+JSON.stringify(data));
    })

    app.delete('/deleteStation', (request, response) => {
        const data = request.body;      
        return response.send('Delete '+JSON.stringify(data));
    })

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

