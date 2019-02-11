const { admin } = require('./config/firebaseConfig')

const newsCollection = admin.firestore().collection('Bangbor')

const news = [

  {
    date: "1-7-2555",
    aqi: [{
      time: "15:00",
      description: "Hazardous",
      aqi: "300",
      density: "100",
      suggestion:"Everyone should avoid all outdoor exertion"
    }, {
      time: "19:00",
      description: "Good",
      aqi: "0",
      density: "0",
      suggestion:"None"
    }]
  },
  {
    date: "4-5-2543",
    aqi: [{
      time: "5:23",
      description: "Moderate",
      aqi: "99",
      density: "30.1",
      suggestion: "Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion."
    }, {
      time: "14:11",
      description: "Unhealthy",
      aqi: "163",
      density: "58.7",
      suggestion: "Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion"
    }]
  },
  {
    date: "6-12-2561",
    aqi: [{
      time: "16:00",
      description: "Very Unhealthy",
      aqi: "249",
      density: "60",
      suggestion: "Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion."
    }]
  },
]

for (var i = 0; i < news.length; i++) {
  var timeStamp = new Date(news[i].date)
  news[i].timeStamp = timeStamp.getFullYear() + '-' + (timeStamp.getMonth() + 1) + '-' + (timeStamp.getDate())
  newsCollection.doc(news[i].timeStamp)
    .set(news[i])
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
}