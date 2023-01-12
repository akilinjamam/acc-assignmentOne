let data = require('../data.json');
let fs = require('fs');

module.exports.getAllData = (req, res) => {

    const { id } = req.params
    let selectId = data.find(d => d.id === Number(id))
    res.send(selectId)
}

module.exports.deleteData = (req, res) => {
    let newData = fs.readFileSync("data.json");
    let myObject = JSON.parse(newData);

    const { id } = req.params;
    const filter = { _id: id };
    let selectedData = myObject.filter(d => d.id !== Number(id));
    myObject.push(selectedData)
    let newData2 = JSON.stringify(selectedData);
    fs.writeFile("data.json", newData2, (err) => {
        if (err) throw err
        console.log('new data added');
    })
    res.send(data);

}



/* 

  let newData = fs.readFileSync("data.json");
    let myObject = JSON.parse(newData);

    const { id } = req.params;
    const filter = { _id: id };
    let selectedData = myObject.filter(d => d.id !== Number(id));
    myObject.push(selectedData)
    let newData2 = JSON.stringify(myObject);
    fs.writeFile("data.json", newData2, (err) => {
        if (err) throw err
        console.log('new data added');
    })
    res.send(data);


*/