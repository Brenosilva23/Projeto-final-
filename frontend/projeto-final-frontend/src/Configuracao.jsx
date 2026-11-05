import React from "react";
import { Link } from "react-router-dom";

function configuracao() {
    return (
        <>
            <section>
                <div>
                    <Link to="/">
                        <button type="button" className="btn" >Sair</button>
                    </Link>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </section>
        </>
    )
}

export default configuracao;