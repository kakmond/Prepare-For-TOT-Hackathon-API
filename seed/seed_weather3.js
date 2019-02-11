const { admin } = require('./config/firebaseConfig')

const newsCollection = admin.firestore().collection('BangborWeather')

const news = [
    {
        date: "4-5-2543",
        temperature: "35.5",
        weather: "Summer",
        describtion: "Use sunscreen"
        ,moisture:"67"
    },
    {
        date: "1-7-2555",
        temperature: "14.2",
        weather: "Summer",
        describtion: "ิBring coat"
        ,moisture:"68.2"
    },
    {
        date: "6-12-2561",
        temperature: "40.1",
        weather: "Rainy",
        describtion: "Bring umbrella",
        moisture:"80"
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
