// sessão
function validarSessao() {
    // aguardar();
    var id_usuario = sessionStorage.ID_USUARIO;
    var email = sessionStorage.EMAIL;
    var nome = sessionStorage.NOME;
    var nome_hero = sessionStorage.NOME_HEROI;

    // var h1LoginUsuario = document.getElementById("h1_login_usuario");
    
    if (email != null && nome != null, nome_hero != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        // if (h1LoginUsuario != undefined) {
        //     h1LoginUsuario.innerHTML = email;
        // }

        b_usuario.innerHTML = nome_hero;
        n_usuario.innerHTML = nome;
        m_usuario.innerHTML = email;
        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}
