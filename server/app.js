const express = require("express");
const expenseRoutes = require("./routes/expenseRoutes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use( "/api/v2/expense" , expenseRoutes);


module.exports = app;