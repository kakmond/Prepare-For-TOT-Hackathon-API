const { admin } = require('./config/firebaseConfig')

const newsCollection = admin.firestore().collection('User')

const news = [
  {
    user:{
        name: "kong",
        lastname: "assavavisidchai",
        email:"kongzahahaplus@gmail.com",
        workplace:"Garena",
        telephone:"1150"
    }
    ,id:"5910545833",
  },
  {
    user:{
        name: "kongssss",
        lastname: "assavavisidchaii",
        email:"kongzaeiei@gmail.com",
        workplace:"pizza",
        telephone:"1112"
    }
    ,id:"5910545868",
  }
]

for (var i = 0; i < news.length; i++) {
  newsCollection
  .doc(news[i].id)
  .set(
      news[i].user
  ).then(function() {
    console.log("Document successfully written!");
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });
    // .add(news[i])
    // .then(function (docRef) {
    //   console.log('Document written with ID: ', docRef.id)
    // })
    // .catch(function (error) {
    //   console.error('Error adding document: ', error)
    // })
}
