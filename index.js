const { readFileSync } = require('fs')
const sendRequest = require('./lib/sendRequest')
const settings = require('./lib/settings')

const privateKeyPath = './cert/private.pem' // your organization certificate
const publicKeyPath = './cert/idporten-ver1_ver2-v3.crt' // path to extracted crt from idporten.difi_.no-v3-prod_idp_metadata.zip

const options = {
  wsdl: settings.wsdl.url,
  url: settings.url.ver1,
  action: settings.action.person,
  args: {
    informasjonsbehov: 'Kontaktinfo',
    personidentifikator: '01013355300'
  },
  privateKey: readFileSync(privateKeyPath),
  publicKey: readFileSync(publicKeyPath),
  password: ''
}

sendRequest(options, (error, data) => {
  console.log(error)
})
