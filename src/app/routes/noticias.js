let dataBaseConnection = require('../../config/dataBaseConnection');
module.exports = (app) => {

    var connection = dataBaseConnection();

    app.get('/noticias', (req, res) => {

        connection.query('select * from noticias', (err, result) => {
            res.render('noticias/noticias', {noticias : result});
        });

    })
};