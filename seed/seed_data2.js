const { admin } = require('./config/firebaseConfig')

const newsCollection = admin.firestore().collection('Bangpeeyai')

const news = [

  {
    date: "12-7-2560",
    aqi: [{
      time: "12:30",
      description: "Good",
      aqi: "40",
      density: "9.5",
      suggestion:"None"
    }, {
      time: "18:00",
      description: "Unhealthy",
      aqi: "153",
      density: "58.6",
      suggestion:"Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion"
    }]
  },
  {
    date: "1-3-2562",
    aqi: [{
      time: "5:20",
      description: "Unhealthy for Sensitive Groups",
      aqi: "120",
      density: "40.3",
      suggestion: "Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion."
    }, {
      time: "15:00",
      description: "Unhealthy",
      aqi: "154",
      density: "59.2",
      suggestion: "Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion"
    }]
  },
  {
    date: "11-2-2561",
    aqi: [{
      time: "16:00",
      description: "Very Unhealthy",
      aqi: "242",
      density: "70",
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