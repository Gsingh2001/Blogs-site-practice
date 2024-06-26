import express from "express";
import db from "./db.js";  // Import the database connection

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json("Hello!");
});

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/books", (req, res) => {
    const q = "INSERT INTO books (title, `desc`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE idbooks = ?";

    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book Deleted Successfully");
    });
});

app.listen(8801, () => {
    console.log("Server is running on port 8801");
});
