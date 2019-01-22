const Pbf = require('pbf');
const geobuf = require('geobuf');
const fs = require('fs');

function readGeobufSync(filename) {
    const file = fs.readFileSync(filename);
    return geobuf.decode(new Pbf(file));
}

function writeGeobufSync(json, filename) {
    const pbf = geobuf.encode(json, new Pbf());
    fs.writeFileSync(filename, Buffer.from(pbf));
}

module.exports = {
    readGeobufSync,
    writeGeobufSync
};