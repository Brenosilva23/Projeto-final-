import React from "react";
import { Link } from "react-router-dom";

function Configuracao() {
  return (
    <section>
      <div>
        <h2 className="h2">Configurações da Conta</h2>
      </div>
      
      <div>
        <Link to="/Editar">
          <button type="button" className="btn-3">Editar Perfil</button>
        </Link>
        <Link to="/perfil">
          <button type="button" className="btn-3">Voltar</button>
        </Link>
        <Link to="/">
          <button type="button" className="btn-3">Sair</button>
        </Link>
      </div>
    </section>
  );
}

export default Configuracao;
