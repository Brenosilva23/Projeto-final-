import React from "react";
import { Link } from "react-router-dom";

function configuracao() {
    return (
        <>
            <section>
                <div>
                    <h2>Configurações da Conta</h2>
                </div>
                <div>
                    <Link to="/">
                        <button type="button" className="btn-2" >Sair</button>
                    </Link>
                    <Link to="/perfil">
                        <button type="button" className="btn-2" >voltar</button>
                    </Link>
                </div>
                <div>

                </div>
                <div></div>
            </section>
        </>
    )
}

export default configuracao;