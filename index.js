const dataRouter = require('./routes/data.route.js');
const randomDataRouters = require('./routes/randomData.route');
const savePostRouter = require('./routes/savePost.route')
const getIdRouter = require('./routes/getId.route')
const updateDatasRouter = require('./routes/updateDatas.route');
const deleteDatasRouter = require('./routes/deleteDatas.route');

const data = require('./data.json')
const express = require('express');
const app = express();
const port = 5001;

// middleware
const cors = require('cors');
app.use(cors());
app.use(express.json());

console.log(data);



app.use('/user/all', dataRouter)
app.use('/user/all', getIdRouter)
app.use('/user/save', savePostRouter)
app.use('/user/update', updateDatasRouter)
app.use('/user/delete', deleteDatasRouter)
app.use('/user/random', randomDataRouters)



app.listen(port, () => {
    console.log('server is running')
});

app.get('/', (req, res) => {
    res.send('server is running....')
})