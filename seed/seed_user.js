const { admin } = require('./config/firebaseConfig')

const newsCollection = admin.firestore().collection('User')

const news = [
  {
    user: {
      name: "kong",
      lastname: "assavavisidchai",
      email: "kongzahahaplus@gmail.com",
      id: "5910545833",
      workplace: "Garena",
      telephone: "1150"
    }
  }
]

for (var i = 0; i < news.length; i++) {
  newsCollection
    .add(news[i])
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch(function (error) {
      console.error('Error adding document: ', error)
    })
}
