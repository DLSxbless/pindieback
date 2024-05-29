const allowedCors = [
     'http://localhost:3000',
     'http://pindie-albstudent.nomoredomainswork.ru',
     'https://pindie-albstudent.nomoredomainswork.ru'
];
function cors(req, res, next) {
    const { origin } = req.headers;

    if (allowedCors.includes(origin)) { //  друг
        res.header('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
    next();
}

module.exports = cors; //base