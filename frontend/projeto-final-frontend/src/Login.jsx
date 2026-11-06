import React from "react";
import { Link } from "react-router-dom"; 

function login() {
  return (
    <>
      <section className="log">
        <div className="l1">
          <h1>
            Veja momentos do dia a dia dos seus amigos próximos.
            <img src="https://static.cdninstagram.com/rsrc.php/yJ/r/53X3pk-t2Gn.webp" height={200} alt="Logo" />
          </h1>
        </div>

        <div className="l2">
          <h3>Entrar no Instagram</h3>

          <input type="text" placeholder="Número de celular, nome de usuário ou email"  autoComplete="off"/>
          <input type="password" placeholder="Senha" autoComplete="off" />
          <Link to="/feed">
            <button type="button" className="btn-primary">Entrar</button>
          </Link>
          <a target="_blank" rel="noopener noreferrer" className="btn-outline theme-secondary" href="https://instagram.com">
            Esqueceu a senha?
          </a>

          <Link className="nova" to="/perfil">
            Criar nova Conta
          </Link>
        </div>
      </section>
    </>
  );
}

export default login;

