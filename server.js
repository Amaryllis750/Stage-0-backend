// require packages
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8010;

// setup the basic middleware
app.use(express.json());    // parse json data from http requests
app.use(express.urlencoded({ extended: false }));     // recognizes incoming requests as strings or arrays
app.use(cors());    // add the cors to enable cors for all domains

// setup the only route in the API
app.get('/', async (req, res) => {
    const email = "danielchukwuemela751@gmail.com";
    const github_url = "https://github.com/Amaryllis750/Stage-0-backend.git"
    const current_datetime = (new Date()).toISOString();

    return res.status(200).json({ email, current_datetime, github_url });
});


app.listen(PORT, () => {
    console.log("Server is listening on port", PORT)
});