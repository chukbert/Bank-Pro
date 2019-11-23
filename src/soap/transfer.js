var request = require('request')
var parser = require('fast-xml-parser');
var he = require('he');
 
var opt = {
    attributeNamePrefix : "@_",
    attrNodeName: "attr", //default is 'false'
    textNodeName : "#text",
    ignoreAttributes : true,
    ignoreNameSpace : false,
    allowBooleanAttributes : false,
    parseNodeValue : true,
    parseAttributeValue : false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    localeRange: "", //To support non english character in tag/attribute values.
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"
    attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
    tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
    stopNodes: ["parse-me-as-string"]
};
 


const transferReq = options => {
  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        if( parser.validate(body) === true) { //optional (it'll return an object in case it's not valid)
            var jsonObj = parser.parse(body,opt);
        }
     
        console.log(body)

        // Intermediate obj
        var tObj = parser.getTraversalObj(body.split('<ns2:transferResponse xmlns:ns2="http://services/">')[1].split('</ns2:transferResponse>')[0],opt);
        var jsonObj = parser.convertToJson(tObj,opt);
        // console.log(jsonObj);
        // console.log(data)
        resolve(jsonObj)
      } else {
        reject(error)
      }
    })
  })
}

const transfer = async (sender, receiver, amount) => {
  const xml =
   `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://services/">
   <soapenv:Header/>
   <soapenv:Body>
      <ser:transfer>
         <arg0>${sender}</arg0>
         <arg1>${receiver}</arg1>
         <arg2>${amount}</arg2>
      </ser:transfer>
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

  let exist = await transferReq(options)
//   console.log(exist)
  return exist
}

module.exports = transfer
