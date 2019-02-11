var express = require('express')
var router = express.Router()

const { firestore, authService, cors, admin } = require('./../config/admin.js')

const userCollection = firestore.collection('Users')

/* post for check id */
router.post('/checkid', function (req, res, next) {
    cors(req, res, () => {
        var userId = req.body.userid
        var res_data = {} // response data
        console.log("userid: " + userId)
        userCollection.doc(userId).get()
            .then(doc => {
                if (!doc.exists) {
                    res_data['return_code'] = '500'
                    res.send(res_data)
                } else {
                    res_data['return_code'] = '200'
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