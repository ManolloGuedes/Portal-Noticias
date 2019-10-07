module.exports.index = function(application, req, res) {
    let connection = application.config.dataBaseConnection();
    let noticiaDAO = new application.app.models.NoticiaDAO(connection);

    noticiaDAO.getUltimasNoticias(5, (error, result) => {
        res.render('home/index', {noticias : result})
    })

}