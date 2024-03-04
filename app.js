const express = require("express")
const body_parser = require("body-parser")
const app = express()
const baseUrlRoutes = require("./routes/baseUrl")
const userUrl = require("./routes/userUrl");

app.use(body_parser.urlencoded({ extended: false }));

//  base url
app.use(userUrl)
app.use(baseUrlRoutes);

app.listen(3001)