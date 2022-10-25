const express = require('express');
const app = express();
const cors = require('cors');
const Port = process.env.PORT || 500;

app.use(cors());

app.get('/', (req, res) => {
    res.send('api is running')
});


app.listen(Port, () => {
    console.log(`server side, ${Port}`)
})