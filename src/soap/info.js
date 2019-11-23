var request = require('request')

const requestTrans = options => {
  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        let nama = body.split('<namaNasabah>')[1].split('</namaNasabah>')[0]
        let rek = body.split('<no_rekening>')[1].split('</no_rekening>')[0]
        let balance =  body.split('<balance>')[1].split('</balance>')[0]
        let data = { nama : nama, rek: rek, balance: balance}
        // console.log(data)
        resolve(data)
      } else {
        reject(error)
      }
    })
  })
}

const info = async number => {
  const xml =
   `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://services/">
   <soapenv:Header/>
   <soapenv:Body>
      <ser:getDataNasabah>
         <!--Optional:-->
         <no_rekening>${number}</no_rekening>
      </ser:getDataNasabah>
   </soapenv:Body>
</soapenv:Envelope>`

  var options = {
    url: 'http://13.229.224.101:8080/engima/WSBank?wsdl',
    method: 'POST',
    body: xml,
    headers: {
      'Content-Type': 'text/xml;charset=utf-8',
      'Accept-Encoding': 'gzip,deflate',
      'Content-Length': xml.length,
      SOAPAction: 'http://services'
    }
  }

//   ----DEV----
//   var options = {
//     url: 'http://localhost:8080/engima_war/WSBank?wsdl',
//     method: 'POST',
//     body: xml,
//     headers: {
//       'Content-Type': 'text/xml;charset=utf-8',
//       'Accept-Encoding': 'gzip,deflate',
//       'Content-Length': xml.length,
//       SOAPAction: 'http://services'
//     }
//   }

  let exist = await requestTrans(options)
  console.log(exist)
  return exist
}

module.exports = info
