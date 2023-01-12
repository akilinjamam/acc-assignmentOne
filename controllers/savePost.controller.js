const fs = require('fs');


module.exports.savePosts = (req, res) => {
    var data = fs.readFileSync("data.json");
    var myObject = JSON.parse(data);
    console.log(myObject);

    let newData = req.body;
    myObject.push(newData);

    var newData2 = JSON.stringify(myObject);
    fs.writeFile("data.json", newData2, (err) => {
        if (err) throw err
        console.log('new data added');
    })

    res.send(data);
}