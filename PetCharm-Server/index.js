const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("PetCharm Server is Running")
})

app.listen(port, () => {
console.log(`PetCharm Server is running on port ${port}`);
})