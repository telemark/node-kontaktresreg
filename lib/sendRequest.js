'use strict'

var soap = require('soap')

function sendRequest (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }

  if (!options.url) {
    return callback(new Error('Missing required input: options.url'), null)
  }

  if (!options.wsdl) {
    return callback(new Error('Missing required input: options.wsdl'), null)
  }

  if (!options.action) {
    return callback(new Error('Missing required input: options.action'), null)
  }

  if (!options.args) {
    return callback(new Error('Missing required input: options.args'), null)
  }

  if (!options.privateKey) {
    return callback(new Error('Missing required input: options.privateKey'), null)
  }

  if (!options.publicKey) {
    return callback(new Error('Missing required input: options.publicKey'), null)
  }

  var wsSecurity = new soap.WSSecurityCert(options.privateKey, options.publicKey, options.password, 'utf8')
  soap.createClient(options.wsdl, function (err, client) {
    if (err) {
      return callback(err)
    }
    client.setEndpoint(options.url)
    client.setSecurity(wsSecurity)
    client[options.action](options.args, function (err, result) {
      if (err) {
        console.log(client.lastRequest)
        return callback(err.body)
      } else {
        return callback(null, result)
      }
    })
  })
}

module.exports = sendRequest
