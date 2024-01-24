const express = require("express");

const {PORT} = require("./config/serverConfig");
const bodyParser = require("body-parser");
const ApiRoutes = require("./router/index");
const {Airport, City, Airplane} = require("./models/index");
const db = require("./models/index");

const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use("/api", ApiRoutes);

    app.listen(PORT, async() => {
        console.log(`Server started at port ${PORT}`);
        if(process.env.SYNC_DB) {
            db.sequelize.sync({alter: true});
        }
        // const airport = await City.findOne({
        //     where: {
        //         id: 8
        //     },
        //     include: Airport
        // });
        // console.log(airport);
        // const city = await City.findOne({
        //     where: {
        //         id: 8
        //     }
        // });
        // const airports = await city.getAirports();
        // console.log(airports);
        await Airplane.create({
            modelNumber: "Bombardier CRJ"
        })
    });
}

setupAndStartServer();