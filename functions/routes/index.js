var express = require('express')
var router = express.Router()

const { firestore, authService, cors, admin } = require('./../config/admin.js')

const aqiCollection = firestore.collection('AQI')

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

module.exports = router