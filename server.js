const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'testdb'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Create Database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE testdb';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Database created...');
    });
});

// Create table
app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body TEXT, PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Posts table created...');
    });
});

// Insert post
app.post('/addpost', (req, res) => {
    let post = { title: req.body.title, body: req.body.body };
    let sql = 'INSERT INTO posts SET ?';
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        res.send('Post added...');
    });
});

// Get posts
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Get post by id
app.get('/getpost/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});


// Update post
app.put('/updatepost/:id', (req, res) => {
    const { id } = req.params;
    const { title, body } = req.body;
    const sql = `UPDATE posts SET title = ?, body = ? WHERE id = ?`;
    db.query(sql, [title, body, id], (err, result) => {
        if (err) throw err;
        res.send('Post updated...');
    });
});

// Delete post
app.delete('/deletepost/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM posts WHERE id = ?`;
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.send('Post deleted...');
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});