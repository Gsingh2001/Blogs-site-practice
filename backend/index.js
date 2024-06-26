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
        if (err) {
            console.error("Error querying books:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
    });
});

app.post("/books", (req, res) => {
    const { title, description } = req.body;
    const q = "INSERT INTO books (title, `description`) VALUES (?, ?)";
    const values = [title, description];

    db.query(q, values, (err, data) => {
        if (err) {
            console.error("Error inserting book:", err);
            return res.status(500).json({ error: "Error inserting book" }); 
        }
        return res.json({ message: "Book inserted successfully", bookId: data.insertId });
    });
});



app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";

    db.query(q, [bookId], (err, data) => {
        if (err) {
            console.error("Error deleting book:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json({ message: "Book deleted successfully" });
    });
});

const PORT = 8801;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
