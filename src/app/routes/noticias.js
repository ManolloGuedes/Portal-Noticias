
module.exports = (application) => {

    application.get('/noticias', (req, res) => {

        let connection = application.config.dataBaseConnection();
        let noticiasModel = application.app.models.noticias;

        noticiasModel.getNoticias(connection, (err, result) => {
            res.render('noticias/noticias', {noticias : result});
        });

    })
};