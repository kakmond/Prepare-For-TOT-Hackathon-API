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

router.post('/register', function (req, res, next) {
    cors(req, res, () => {
        var userId = req.body.userId
        var name = req.body.name
        var lastname = req.body.lastname
        var email = req.body.email
        var workplace = req.body.workplace
        var telephone = req.body.telephone
        var uId = req.body.uId
        var res_data = {}
        userCollection.doc(userId).get()
            .then(doc => {
                if (!doc.exists) {
                    res_data['userId'] = userId
                    res_data['name'] = name
                    res_data['lastname'] = lastname
                    res_data['email'] = email
                    res_data['workplace'] = workplace
                    res_data['telephone'] = telephone
                    res_data['uId'] = uId
                    userCollection
                        .doc(res_data['uId'])
                        .set(
                            res_data
                        ).then(function () {
                            console.log("Document successfully written!");
                        })
                        .catch(function (error) {
                            console.error("Error writing document: ", error);
                        });
                    console.log(res_data)
                    res.send({ 'return_code': 200 })
                } else {
                    res_data['return_code'] = '500'
                    res.send(res_data)
                }
            })
            .catch(err => {
                res_data['return_code'] = '500'
                console.log(err)
                res.send(res_data)
            });
    })
})

router.get('/:id', function (req, res, next) {
    cors(req, res, () => {
        var uId = req.params.id
        var res_data = {}
        userCollection.doc(uId).get().then(doc => {
            if (!doc.exists) {
                res_data['return_code'] = '500'
                res.send(res_data)
            } else {
                res_data['return_code'] = '200'
                res_data['email'] = doc.email
                res_data['lastname'] = doc.lastname
                res_data['name'] = doc.name
                res_data['telephone'] = doc.telephone
                res_data['userId'] = doc.userId
                res_data['workplace'] = doc.workplace
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