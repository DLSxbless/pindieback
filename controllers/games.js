const sendAllGames = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.gamesArray));
};

const sendGameCreated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.game));
};

//PUT
const sendGameUpdated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end("Game updated successfully");
};

//DELETE

const sendGameDeleted = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.game));
};

module.exports = { sendAllGames, sendGameCreated, sendGameUpdated, sendGameDeleted };