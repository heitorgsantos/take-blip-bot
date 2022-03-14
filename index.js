const express = require('express');
const cors = require('cors');
const { router } = require('./router/router');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', router);



const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => res.json(

// ));


app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port ${PORT}!`));
