const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
let PORT = process.env.PORT || 8081;

// Deafult code for express
app.use(cors());
// defaulr parameters for the backend app
app.set('view engine', 'ejs');
app.use(express.json({ extended: false}));
app.use(express.static('views'));
app.use(express.urlencoded({extended: false}));

app.get('/land', (req, res, next) => {
    res.sendFile(path.join(__dirname+'/landpage.html'));
})

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})


app.listen(PORT, ()=> {
    console.log(`The app is running on ${PORT}`);
});