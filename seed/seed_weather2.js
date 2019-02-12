const { admin } = require('./config/firebaseConfig')

const newsCollection = admin.firestore().collection('BangpeeyaiWeather')

const news = [
    {
        date: "12-7-2560",
        temperature: "41.8",
        weather: "Rainy",
        describtion: "Bring umbrella"
        ,moisture:"78.2"
    },
    {
        date: "11-3-2561",
        temperature: "37.3",
        weather: "Summer",
        describtion: "Use sunscreen"
        ,moisture:"65.1"
    },
    {
        date: "1-3-2562",
        temperature: "14.3",
        weather: "Winter",
        describtion: "Bring coat",
        moisture:"64.2"
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
