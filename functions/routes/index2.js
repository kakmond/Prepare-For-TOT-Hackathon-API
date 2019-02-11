var express = require('express')
var router = express.Router()

const { firestore, authService, cors, admin } = require('./../config/admin.js')

const aqiCollection = firestore.collection('Bangpeeyai')
const newsCollection = firestore.collection('BangpeeyaiNews')
const weatherCollection = firestore.collection('BangpeeyaiWeather')

/* GET all articles. */
router.get('/', function (req, res, next) {
    cors(req, res, () => {
        res.contentType('application/json')
        var res_data = {} // response data
        var data = []
        aqiCollection.orderBy('timeStamp','desc')
            .get()
            .then(snap => {
                snap.forEach(doc => {
                    data.push(doc.data())
                })
                res_data['return_code'] = '200'
                res_data['description'] = "Get all aqi data successfully."
                res_data['result'] = data
                res.send(res_data)
            })
            .catch(err => {
                res_data['return_code'] = '500'
                res_data['description'] = "Timeout."
                res_data['result'] = null
                res.send(res_data)
            })
    })
})


/* GET status. */
router.get('/:id', function (req, res, next) {
    cors(req, res, () => {
        var uId = req.params.id
        var res_data = {}
        newsCollection.doc(uId).get().then(doc => {
            if (!doc.exists) {
                res_data['return_code'] = '400'
                res.send(res_data)
            } else {
                res_data['return_code'] = '200'
                res_data['date'] = doc.data().date
                res_data['report'] = doc.data().report
                res_data['timeStamp'] = doc.data().timeStamp
                res.send(res_data)
            }
        })
            .catch(err => {
                res_data['return_code'] = '500'
                res.send(res_data)
            });
    })
})

router.get('/weather/:id',function(req,res,next){
    cors(req, res, () => {
        var uId = req.params.id
        var res_data = {}
        weatherCollection.doc(uId).get().then(doc => {
            if (!doc.exists) {
                res_data['return_code'] = '400'
                res.send(res_data)
            } else {
                res_data['return_code'] = '200'
                res_data['date'] = doc.data().date
                res_data['temperature']=doc.data().temperature
                res_data['weather'] = doc.data().weather
                res_data['timeStamp'] = doc.data().timeStamp
                res_data['describtion']=doc.data().describtion
                res_data['moisture']=doc.data().moisture
                res.send(res_data)
            }
        })
            .catch(err => {
                res_data['return_code'] = '500'
                res.send(res_data)
            });
    })
})

module.exports = router