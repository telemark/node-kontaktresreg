'use strict'

var fs = require('fs')
var sendRequest = require('./lib/sendRequest')
var settings = require('./lib/settings')

var privateKeyPath = './cert/private.pem' // your organization certificate
var publicKeyPath = './cert/idporten-ver1_ver2-v3.crt' // path to extracted crt from idporten.difi_.no-v3-prod_idp_metadata.zip

var options = {
  wsdl: settings.wsdl.url,
  url: settings.url.ver1,
  action: settings.action.person,
  args: {
    informasjonsbehov: 'Kontaktinfo',
    personidentifikator: '01013355300'
  },
  privateKey: fs.readFileSync(privateKeyPath),
  publicKey: fs.readFileSync(publicKeyPath),
  password: ''
}

sendRequest(options, function (err, data) {
  console.log(err)
})
