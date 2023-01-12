let data = require('../data.json');

module.exports.getAllUsers = (req, res) => {
    res.send(data)
}

