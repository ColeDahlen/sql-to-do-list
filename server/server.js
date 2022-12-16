const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./modules/pool.js');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/toDo',(req,res) =>{
    let sqlQuery = `
    SELECT * FROM "toList"
    ORDER BY "id";
    `;
    pool.query(sqlQuery)
        .then((dbRes) =>{
            let tableData = dbRes.rows;
            res.send(tableData);
            console.log(dbRes.rows)
        })
        .catch((dbError) =>{
            res.sendStatus(500)
            console.log('get server error', dbError)
        })


})
app.post('/toDo', (req, res) =>{
    let sqlQuery = `
    INSERT INTO "toList"
        ("task", "status")
        VALUES
        ($1, $2);
    `
    let sqlValues = [req.body.task, req.body.status]
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) =>{
            res.sendStatus(201);
        })
        .catch((dbError) =>{
            res.sendStatus(500)
        })
})
app.put('/toDo/:id', (req,res) =>{
    let sqlQuery = `
    UPDATE "toList"
    SET "status" = $1
    WHERE "id" = $2;
    `
    let sqlValues = [req.body.status, req.params.id]
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) =>{
            res.sendStatus(200)
        })
        .catch((dbError) =>{
            res.sendStatus(500)
        })
})
app.delete('/toDo/:id', (req,res) =>{
    let sqlQuery = `
    DELETE FROM "toList"
        WHERE "id" = $1;
    `
    let sqlValues = [req.params.id];
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) =>{
            res.sendStatus(201)
        })
        .catch((dbError) =>{
            res.sendStatus(500)
        })
})
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
})