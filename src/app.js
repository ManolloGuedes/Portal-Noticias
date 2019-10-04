let app = require('./config/server');

let rotaHome = require('./app/routes/home');
rotaHome(app);

let rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);

let rotaFormularioInclusaoNoticias = require('./app/routes/formularioInclusaoNoticia');
rotaFormularioInclusaoNoticias(app);

app.listen(3000, () => {
    console.log('Server is running');
})