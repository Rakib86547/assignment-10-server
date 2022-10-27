const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require('./data/categories.json');
const tutorials = require('./data/tutorials.json');
app.get('/', (req, res) => {
    res.send('api is running')
});

app.get('/programing-category', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const select_category = tutorials.filter(tuto => tuto.category_id === id);
    res.send(select_category);
})


app.get('/tutorials/:id', (req, res) => {
    const id = req.params.id;
    const program_tutorial = tutorials.find(tuto => tuto._id === id);
    res.send(program_tutorial)
})

app.get('/checkpagess/:id', (req, res) => {
    const id = req.params.id;
    const program_checks = tutorials.find(tuto => tuto._id === id);
    res.send(program_checks)
})


app.get('/all-tutorials', (req, res) => {
    res.send(tutorials)
})

app.listen(port, () => {
    console.log(`server side, ${port}`)
})