'use strict'

var settings = {
  wsdl: 'http://begrep.difi.no/Oppslagstjenesten/xsd/oppslagstjeneste-ws-16-02.wsdl',
  url: {
    prod: 'https://kontaktinfo-ws.difi.no/kontaktinfo-external/ws-v5',
    ver1: 'https://kontaktinfo-ws-ver1.difi.no/kontaktinfo-external/ws-v5',
    ver2: 'https://kontaktinfo-ws-ver2.difi.no/kontaktinfo-external/ws-v5',
    test1: 'https://kontaktinfo-ws-yt1.difi.no/kontaktinfo-external/ws-v5',
    test2: 'https://kontaktinfo-ws-yt2.difi.no/kontaktinfo-external/ws-v5'
  },
  action: {
    person: 'HentPersoner',
    cert: 'HentPrintSertifikat',
    changes: 'HentEndringer'
  }
}

module.exports = settings
