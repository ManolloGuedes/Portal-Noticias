module.exports = () => {
    this.getNoticias = function(connection, callback) {
        connection.query('select * from noticias', callback);
    }

    this.getNoticia = function(connection, callback) {
        connection.query('select * from noticias where idnoticias = 1', callback);
    }

    return this;
}