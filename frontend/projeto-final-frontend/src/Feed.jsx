import React from "react";
import { Link } from "react-router-dom";

function Feed() {
    return (
        <>
            <section className="feed-container">
                <div id="ftperfil">
                    <img className="perfil" src="https://i.pinimg.com/736x/29/7b/2c/297b2c752bb8fe5dc4f640b4c6f213ed.jpg" alt="Perfil" />
                </div>
                <div>
                    <Link to="/perfil">
                        <button type="button" className="btn" >Perfil</button>
                    </Link>
                    <Link to="/configuracao">
                        <button type="button" className="btn" >Configuração</button>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Feed;
