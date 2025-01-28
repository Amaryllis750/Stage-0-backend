    const express = require('express');
    const app = express();
    const PORT = 8010;

    // setup the basic middleware
    app.use(express.json());    // parse json data from http requests
    app.use(express.urlencoded({extended: false}));     // recognizes incoming requests as strings or arrays

    app.get('/', async(req, res)=> {
        const email = "danielchukwuemela751@gmail.com";
        const github_url = "https://github.com/Amaryllis750/Stage-0-backend.git"
        const current_datetime = (new Date()).toISOString();

        return res.status(200).json({email, current_datetime, github_url});
    });


    app.listen(PORT, () => {
        console.log("Server is listening on port", PORT)
    });