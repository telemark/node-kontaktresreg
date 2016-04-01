'use strict'

var tap = require('tap')
var testOptions = require('./data/sendRequestOpts.json')
var sendRequest = require('../lib/sendRequest')

tap.throws(
  function (test) {
    var options = JSON.parse(JSON.stringify(testOptions))
    options = false
    var expectedErrorMessage = 'Missing required input: options'
    sendRequest(options, function errorIfMissingOptions (error, data) {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
  }
)

tap.throws(
  function (test) {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.wsdl = false
    var expectedErrorMessage = 'Missing required input: options.wsdl'
    sendRequest(options, function errorIfMissingOptions (error, data) {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
  }
)

tap.throws(
  function (test) {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.url = false
    var expectedErrorMessage = 'Missing required input: options.url'
    sendRequest(options, function errorIfMissingOptions (error, data) {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
  }
)

tap.throws(
  function (test) {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.action = false
    var expectedErrorMessage = 'Missing required input: options.action'
    sendRequest(options, function errorIfMissingOptions (error, data) {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
  }
)

tap.throws(
  function (test) {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.args = false
    var expectedErrorMessage = 'Missing required input: options.args'
    sendRequest(options, function errorIfMissingOptions (error, data) {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
  }
)

tap.throws(
  function (test) {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.privateKey = false
    var expectedErrorMessage = 'Missing required input: options.privateKey'
    sendRequest(options, function errorIfMissingOptions (error, data) {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
  }
)

tap.throws(
  function (test) {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.publicKey = false
    var expectedErrorMessage = 'Missing required input: options.publicKey'
    sendRequest(options, function errorIfMissingOptions (error, data) {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
  }
)

