// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
