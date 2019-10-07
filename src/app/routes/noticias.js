
module.exports = (application) => {

    application.get('/noticias', (req, res) => {

        let connection = application.config.dataBaseConnection();
        let noticiaDAO = new application.app.models.NoticiaDAO(connection);

        noticiaDAO.getNoticias((err, result) => {
            res.render('noticias/noticias', {noticias : result});
        });

    })
};