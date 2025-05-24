const { Usuario } = require("../models/Usuario");
const { atualizar } = require("../services/servicoDeUsuario");

class RepositorioDeUsuario {
  buscarTodos() {
    return Usuario.buscarTodos();
  }

  criar(usuario) {
    return usuario.salvar();
  }

  buscarPeloEmail(email) {
    return Usuario.buscarPeloEmail(email);
  }
  atualizar (id, dadosNovos) {
    return Usuario.atualizar(id, dadosNovos);
  }
  buscarPeloId(id, buscarPeloId) {
    return Usuario.buscarPeloId(id, buscarPeloId);
  }
}

module.exports = new RepositorioDeUsuario();
