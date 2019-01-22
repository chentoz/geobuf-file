const geobufFile = require('./index');
const fs = require('fs-extra');
test('reads and writes test file ok ', () => {
    const cities = require('./test/cities.json');
    const dir = __dirname + '/tmp'
    fs.ensureDirSync(dir);
    geobufFile.writeGeobufSync(cities, dir + '/cities.geobuf');
    const citiesRoundTrip  = geobufFile.readGeobufSync(dir + '/cities.geobuf');
    expect(cities).toEqual(citiesRoundTrip);
    fs.remove(__dirname + '/tmp'); 
});