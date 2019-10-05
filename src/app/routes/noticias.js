
module.exports = (app) => {

    app.get('/noticias', (req, res) => {

        let connection = app.config.dataBaseConnection();
        connection.query('select * from noticias', (err, result) => {
            res.render('noticias/noticias', {noticias : result});
        });

    })
};