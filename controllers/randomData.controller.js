const fs = require('fs');
let data = require('../data.json');

module.exports.getRandomData = (req, res) => {

    let rndValue;
    rndValue = Math.floor((Math.random() * data.length) + 1);
    console.log(rndValue);
    console.log(data.length)

    const selectedId = data.find(d => d.id === rndValue);

    res.send(selectedId);

}

