module.exports.formularioInclusaoNoticia = function(application, req, res) {
    res.render('admin/form_add_noticia', {error : {}, noticia : {}});
}

module.exports.salvarNoticia = function(application, req, res) {
    let noticia = req.body;

        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('nomeautor', 'Nome do autor é obrigatório').notEmpty();
        req.assert('datanoticia', 'Data da notícia é obrigatório').notEmpty()
            .isDate({format : 'YYYY-MM-DD'});
        req.assert('noticia', 'Notícia é obrigatório').notEmpty();

        let error = req.validationErrors();

        if(error) {
            res.render('admin/form_add_noticia', {error : error, noticia : noticia});
            return;
        }

        let connection = application.config.dataBaseConnection();
        let noticiaDAO = new application.app.models.NoticiaDAO(connection);

        noticiaDAO.salvarNoticia(noticia, (err, result) => {
            res.redirect('/noticias');
        });
}