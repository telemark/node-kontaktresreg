'use strict'

var settings = {
  wsdl: {
    url: 'http://begrep.difi.no/Oppslagstjenesten/xsd/oppslagstjeneste-ws-16-02.wsdl',
    local: './docs/oppslagstjeneste-ws-16-02.wsdl'
  },
  url: {
    prod: 'https://kontaktinfo-ws.difi.no/kontaktinfo-external/ws-v4', // Produksjon
    ver1: 'https://kontaktinfo-ws-ver1.difi.no/kontaktinfo-external/ws-v4', // Verifikasjonstest 1
    ver2: 'https://kontaktinfo-ws-ver2.difi.no/kontaktinfo-external/ws-v4', // Verifikasjonstest 2
    test1: 'https://kontaktinfo-ws-yt1.difi.no/kontaktinfo-external/ws-v4', // Ytelsetest 1
    test2: 'https://kontaktinfo-ws-yt2.difi.no/kontaktinfo-external/ws-v4' // Ytelsetest 2
  },
  action: {
    person: 'HentPersoner',
    cert: 'HentPrintSertifikat',
    changes: 'HentEndringer'
  }
}

module.exports = settings
