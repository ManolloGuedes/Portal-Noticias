
module.exports = (app) => {

    app.get('/noticia', (req, res) => {

        let connection = app.config.dataBaseConnection();
        connection.query('select * from noticias where idnoticias = 1', (err, result) => {
            res.render('noticias/noticia', {noticia : result});
        });

    })
};