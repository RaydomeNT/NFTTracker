require("./db/connection");
const express = require ('express');
const userRouter = require('./user/routes');
require('dotenv').config();
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/projects', userRouter);

app.listen(process.env.PORT, () => {
    console.log('connected to db & listening on port', process.env.PORT)
});

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
});
