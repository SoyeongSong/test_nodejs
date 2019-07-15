const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))


app.use(express.static('views'))

const path = require('path');
const router = express.Router();
// router.get('/main', function(req, res) {
//     res.sendFile(path.join(__dirname + '/main.html'));
//     //__dirname : It will resolve to your project folder.
// });

// router.get('/external', function(req, res) {
//     res.sendFile(path.join(__dirname + '/external.html'));
//     //__dirname : It will resolve to your project folder.
// });


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/nostyle', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/raw/NoStylesheet.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/style1', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/raw/Stylesheet1.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/style2', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/raw/Stylesheet2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/style3', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/raw/Stylesheet3.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/style4', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/raw/Stylesheet4.html'));
    //__dirname : It will resolve to your project folder.
});



app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))