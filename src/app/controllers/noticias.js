module.exports.noticias = function(application, req, res) {
    let connection = application.config.dataBaseConnection();
    let noticiaDAO = new application.app.models.NoticiaDAO(connection);

    noticiaDAO.getNoticias((err, result) => {
        res.render('noticias/noticias', {noticias : result});
    });
}

module.exports.noticia = function(application, req, res) {
    let connection = application.config.dataBaseConnection();
    let noticiaDAO = new application.app.models.NoticiaDAO(connection);

    let idNoticia = req.query.idnoticia;

    noticiaDAO.getNoticia(idNoticia, (err, result) => {
        res.render('noticias/noticia', {noticia : result});
    });
}