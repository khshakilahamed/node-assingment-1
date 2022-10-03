const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const userRoutes = require('./routes/v1/user.route');
const errorHandler = require('./middlewares/errorHandler');


// middleware
app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRoutes);


app.get("/", (req, res) => {
    res.send("Hello World");
});


app.all("*", (req, res) => {
    res.send("No Route Found");
});

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`);
});

process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);

    app.close(() => {
        process.exit(1);
    });
});