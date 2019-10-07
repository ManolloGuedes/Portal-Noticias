module.exports = (application) => {
    application.get('/formulario_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticia');
    });

    application.post('/noticias/salvar', (req, res) => {
        let noticia = req.body;

        let connection = application.config.dataBaseConnection();
        let noticiaDAO = new application.app.models.NoticiaDAO(connection);

        noticiaDAO.salvarNoticia(noticia, (err, result) => {
            res.redirect('/noticias');
        });
    })

};