const fs = require('fs');
let data = require('../data.json');

module.exports.updateDatas = (req, res) => {

    // var data = fs.readFileSync("data.json");
    // let myObject = JSON.parse(data);

    const { id } = req.params;
    const filter = { _id: id };
    let newData = data.find(d => d.id === Number(id));

    newData.id = parseInt(id);
    newData.name = req.body.name;
    newData.gender = req.body.gender;
    newData.contact = req.body.contact;
    newData.address = req.body.address;
    newData.photoUrl = req.body.photoUrl;

    data.push = newData;

    data = JSON.stringify(data);
    fs.writeFile("data.json", data, (err) => {
        if (err) throw err
        console.log('new data added');
    })

    res.send(newData);
}