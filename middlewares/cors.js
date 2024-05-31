const allowedCors = [
     'https://pindie-albstudentfr.nomorepartiesco.ru',
     'http://pindie-albstudentfr.nomorepartiesco.ru',
     'https://localhost:3000',
     'http://localhost:3000'];


function cors(req, res, next) {
    const { origin } = req.headers;

    if (allowedCors.includes(origin)) { // Если это наш друг
        res.header('Access-Control-Allow-Origin', origin);
    }

    res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");

    next();
}

module.exports = cors;
