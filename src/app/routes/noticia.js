
module.exports = (application) => {

    application.get('/noticia', (req, res) => {

        let connection = application.config.dataBaseConnection();
        let noticiasModel = application.app.models.noticias;

        noticiasModel.getNoticia(connection, (err, result) => {
            res.render('noticias/noticia', {noticia : result});
        });

    })
};