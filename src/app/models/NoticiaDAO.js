class NoticiaDAO {
    constructor(connection) {
        this._connection = connection;
    }

    getNoticias(callback) {
        this._connection.query('select * from noticias order by datacriacao desc', callback);
    }

    getNoticia(idNoticia, callback) {
        let sql = `
            select *
            from noticias
            where idnoticias = ${idNoticia}
        `;
        this._connection.query(sql, callback);
    }

    getUltimasNoticias(quantidade, callback) {
        let sql = `
            select *
            from noticias
            order by datacriacao desc
            limit ${quantidade}
        `;
        this._connection.query(sql, callback);
    }

    salvarNoticia(noticia, callback) {
        this._connection.query('insert into noticias set ? ', noticia, callback);
    }
}

module.exports = () => {
    return NoticiaDAO;
}