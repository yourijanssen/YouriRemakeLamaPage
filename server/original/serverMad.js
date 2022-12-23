// Madelief: Added some comments to explain what everything does.

import express from 'express';
import { deleteAccount, updateAccount } from './controllers/changeAccount';
import { pool } from './Util/database';

var parseUrl = require('body-parser');
const app = express();
const frontPort = 5500 | 5501;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', `http://127.0.0.1:${frontPort}`);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', "true");
    next();
});


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    res.status(200).json(
        { "Reply": "Hello world!" }
    );
});


app.post('/register', (req, res) => {

    if (req.body.isSeller === 1) {
        pool.query(`SELECT * FROM MayoLama.user WHERE username = ? OR mail = ?`, [req.body.username, req.body.email], function (err, result) {
            if (err) {
                console.log(err);
                res.status(404).json(
                    err.message
                );
            };
            if (Object.keys(result).length > 0) {
                console.log('Register Failed! Try Again');
                res.status(404).json(
                    console.log('failed')
                );
            } else {
                pool.query(`INSERT INTO MayoLama.user (username, mail, password, role) VALUES (?, ?, ?, ?)`,
                    [req.body.username, req.body.email, req.body.password, 'seller'], function (err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('data inserted');
                            res.status(200).json(
                                console.log('succes'));
                        };
                    });
            }
        });
    } else {
        pool.query(`SELECT * FROM MayoLama.user WHERE username = ? OR mail = ?`, [req.body.username, req.body.email], function (err, result) {
            if (err) {
                console.log(err);
                res.status(404).json(
                    err.message
                );
            };
            if (Object.keys(result).length > 0) {
                console.log('Register Failed! Try Again');
                res.status(404).json(
                    console.log('failed')
                );
            } else {
                pool.query(`INSERT INTO MayoLama.user (username, mail, password, role) VALUES (?, ?, ?, ?)`,
                    [req.body.username, req.body.email, req.body.password, 'user'], function (err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('data inserted');
                            res.status(200).json(
                                console.log('succes'));
                        };
                    });
            }
        });
    }
});

app.post('/login', (req, res) => {
    pool.query("SELECT * FROM MayoLama.user WHERE username = ? AND password = ?", [req.query.username, req.query.password],
        function (err, results) {
            if (err) {
                console.log(err);
                res.status(404).json(
                    err.message
                );
            };
            if (Object.keys(results).length > 0) {
                res.status(200).json({
                    login: "ok",
                    results
                }
                );
            }
            else {
                res.status(401);
                res.json("nok");
            }
        });
});

app.post('/account/:id', (req, res) => {
    if (req.params.id === "update") {
        updateAccount(req, res);
    }
    else if (req.params.id === "delete") {
        deleteAccount(req, res);
    }

});

const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});


