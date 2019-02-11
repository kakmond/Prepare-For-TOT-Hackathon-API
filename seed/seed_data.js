const { admin } = require('./config/firebaseConfig')

const newsCollection = admin.firestore().collection('AQI')

const news = [

  {
    date: "12-7-2540",
    aqi: [{
      time: "12:00",
      description: "Good",
      aqi: "49",
      density: "10.5",
      suggestion:"dont do anything"
    }, {
      time: "14:00",
      description: "Unhealthy",
      aqi: "153",
      density: "58.6",
      suggestion:"dont go out"
    }]
  },
  {
    date: "11-2-2562",
    aqi: [{
      time: "5:00",
      description: "Moderate",
      aqi: "80",
      density: "26",
      suggestion: "chill out"
    }, {
      time: "14:00",
      description: "Unhealthy",
      aqi: "153",
      density: "58.6",
      suggestion: "put a mask"
    }]
  },
  {
    date: "10-2-2562",
    aqi: [{
      time: "5:00",
      description: "Moderate",
      aqi: "80",
      density: "26",
      suggestion: "chill out"
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