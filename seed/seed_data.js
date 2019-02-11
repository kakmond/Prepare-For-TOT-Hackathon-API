const { admin } = require('./config/firebaseConfig')

const newsCollection = admin.firestore().collection('AQI')

const news = [
  {
    data:[
      {
        date:"12/7/2540",
        aqi:{
          time:"12:00",
          description:"Good",
          aqi:"49",
          density:"10.5"
        }
    },
    {
      date:"11/2/2562",
      aqi:{
        time:"14:00",
        description:"Unhealthy",
        aqi:"153",
        density:"58.6"
      }
  },
  {
    date:"10/2/2562",
    aqi:{
      time:"5:00",
      description:"Moderate",
      aqi:"80",
      density:"26"
    }
},
    ],
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
