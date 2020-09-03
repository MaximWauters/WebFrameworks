const express = require('express');
const server = express();
const apiRouter = express.Router();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

var db;

server.use(cors())
server.use(bodyParser.json());
server.use('/api', apiRouter);

/*
let anime = [{
    name: "Attack on titan",
    arc: "1",
    pages: 342
}, {
    name: "Sword art online",
    arc:"2",
    pages: 453
}, {
    name: "Seven deadly sins",
    arc: "3",
    pages: 732
}, { 
    name: "Death note",
    arc: "1",
    pages: 542
}];
*/

MongoClient.connect('mongodb://localhost:27017/klanten', function (err, _db) {
    console.log("Connected to MongoDB!");
    db = _db;
});

apiRouter.route('/klanten')
    .get((req, res)  => {
        let query = req.query; // query is handig voor zoeken op /api/klanten?naam=joske
        db.collection("gegevens").find(query).toArray((err, gegevens) => {
            if (err != null)
            {
                res.statusCode(500);
                return;
            }
            res.json(gegevens);
        })
    })
    .post((req, res) => {
        let request = req;
        db.collection("gegevens").insert(req.body, (err, result) => {
            //let r = result;
            res.json(result.ops[0]);
        })
    })
/*
db.collection('Anime').insert(anime, function (err, res) {

});
*/
/*
apiRouter.route('/klanten/:naam')
    .get((req, res) => {

    })
*/
server.listen(8001, () => { console.log("Server up and running...")});