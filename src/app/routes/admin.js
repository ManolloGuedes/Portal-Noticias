module.exports = (application) => {
    application.get('/formulario_inclusao_noticia', (req, res) => {
        application.app.controllers.admin.formularioInclusaoNoticia(application, req, res);
    });

    application.post('/noticias/salvar', (req, res) => {
        application.app.controllers.admin.salvarNoticia(application, req, res);
    })

};