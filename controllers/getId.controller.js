let data = require('../data.json');

module.exports.getUserIds = (req, res) => {
    const { id } = req.params;
    const filter = { _id: id };

    const selectedId = data.find(d => d.id === Number(id));

    if (selectedId) {
        res.send(selectedId);
    } else {
        res.send('no id found')
    }
}