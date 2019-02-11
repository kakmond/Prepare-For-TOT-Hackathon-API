var admin = require('firebase-admin')
var serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: '"https://tot-hackathon-2019.firebaseio.com"'
})
var firestore = admin.firestore()
firestore.settings({ timestampsInSnapshots: true })

module.exports = {
  admin
}
