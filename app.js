const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('./middlewares/cors');
const apiRouter = require('./routes/api');
const connectToDatabase = require('./database/connect');
const cookieParser = require('cookie-parser');
const pageRouter = require("./routes/pages")

const app = express();
const PORT = 3001 || process.env.PORT 

connectToDatabase()

app.use(
    cors, 
    cookieParser(),
    bodyParser.json(),
    pageRouter,
    apiRouter,
    express.static(path.join(__dirname, 'public')),
    );

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
