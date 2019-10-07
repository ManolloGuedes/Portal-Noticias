
module.exports = (application) => {

    application.get('/noticia', (req, res) => {

        let connection = application.config.dataBaseConnection();
        let noticiaDAO = new application.app.models.NoticiaDAO(connection);

        noticiaDAO.getNoticia((err, result) => {
            res.render('noticias/noticia', {noticia : result});
        });

    })
};