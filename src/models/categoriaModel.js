
var database = require("../database/config")

// var id = SessionStorage.ID_USUARIO;

function listar(id_usuario) {
    
    // var instrucao = `
    // select categoria, count(categoria) from usuario 
    // join Historico on fkUsuario = idUsuario 
    // join Atividades on fkAtividade = idAtividade
    // where nome = 'Nickolas'
    // group by categoria;
    // `;
    var instrucao = `
    select count(categoria = 'boa_acao') as boa_acao , count(categoria = 'heroi') as heroi,
    count(categoria = 'super-heroi') as super_heroi from usuario 
    join Historico on fkUsuario = idUsuario 
    join Atividades on fkAtividade = idAtividade
    where idUsuario = ${id_usuario}; `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar
};