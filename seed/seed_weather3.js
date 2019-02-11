const { admin } = require('./config/firebaseConfig')

const newsCollection = admin.firestore().collection('BangborWeather')

const news = [
    {
        date: "12-7-2540",
        temperature: "15",
        weather: "Winter",
        describtion: "ิBring coat"
        ,moisture:"70"
    },
    {
        date: "11-2-2562",
        temperature: "35",
        weather: "Summer",
        describtion: "Use sunscreen"
        ,moisture:"68"
    },
    {
        date: "10-2-2562",
        temperature: "40",
        weather: "Rainy",
        describtion: "Bring umbrella",
        moisture:"78"
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
