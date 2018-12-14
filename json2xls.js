var json2xls = require('json2xls');
var Json2csvParser = require('json2csv').Parser;    //more downloads
var fields = ['foo.name', 'qux', 'poo', 'stux'];    //fields to be exported

var fs = require('fs');
var jsonArr = [{
    foo: {name:'bar'},
    qux: 'moo',
    poo: 123,
    stux: new Date()
},
{
    foo: {name:'bar1'},
    qux: 'moo',
    poo: 345,
    stux: new Date()
}];

// var xls = json2xls(jsonArr, {fields});
// fs.writeFileSync('data.xlsx', xls, 'binary');

var parser = new Json2csvParser({fields});
var csv = parser.parse(jsonArr)
fs.writeFileSync('data.csv', csv, 'binary');