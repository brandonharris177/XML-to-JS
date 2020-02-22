// var fs = require('fs');
// var xml2js =  require('xml2js');
// var parser = new xml2js.Parser();

// fs.readFile('note.xml', function(err,data) {
//     parser.parseString(data,function(err,result){
//         console.log(result)
//     })
// })

data = `<note>
<date>2015-09-01</date>
<hour>08:30</hour>
<to>Tove</to>
<from>Jani</from>
<body>Don't forget me this weekend!</body>
</note>`

var xml2js =  require('xml2js');

xml2js.parseStringPromise(data).then(function (result) {
    console.dir(result);
    console.log('Done');
  })
  .catch(function (err) {

  });