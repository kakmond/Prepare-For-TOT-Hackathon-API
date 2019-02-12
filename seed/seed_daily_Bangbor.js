const { admin } = require('./config/firebaseConfig')

const newsCollection = admin.firestore().collection('BangborNews')

const news = [
    {
        date: "1-7-2555",
        status: "500",
        report: "We won't work today due to PM2.5!"
    },
    {
        date: "4-5-2543",
        status: "200",
        report: "We work as normal :)"
    },
    {
        date: "6-12-2561",
        status: "500",
        report: "We won't work today due to PM2.5!"
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