const { admin } = require('./config/firebaseConfig')

const newsCollection = admin.firestore().collection('Bangsaothong')

const news = [

  {
    date: "12-7-2540",
    aqi: [{
      time: "12:00",
      description: "Good",
      aqi: "49",
      density: "10.5",
      suggestion:"None"
    }, {
      time: "14:00",
      description: "Unhealthy",
      aqi: "153",
      density: "58.6",
      suggestion:"Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion"
    }]
  },
  {
    date: "11-2-2562",
    aqi: [{
      time: "5:00",
      description: "Moderate",
      aqi: "80",
      density: "26",
      suggestion: "Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion."
    }, {
      time: "14:00",
      description: "Unhealthy",
      aqi: "153",
      density: "58.6",
      suggestion: "Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion"
    }]
  },
  {
    date: "10-2-2562",
    aqi: [{
      time: "5:00",
      description: "Moderate",
      aqi: "80",
      density: "26",
      suggestion: "Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion."
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
