const express = require("express");

const {PORT} = require("./config/serverConfig");
const bodyParser = require("body-parser");
const ApiRoutes = require("./router/index");

const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use("/api", ApiRoutes);

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
    });
}

setupAndStartServer();