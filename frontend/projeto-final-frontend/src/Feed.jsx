import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Feed() {
    const [postagens, setPostagens] = useState([]);
    const [perfil, setPerfil] = useState({ nome: "", ftPerfil: "" });

    useEffect(() => {
        fetch("http://localhost:3000/api/perfil")
            .then((res) => res.json())
            .then((data) => setPerfil(data))
            .catch((err) => console.error("Erro ao carregar perfil no feed:", err));

        fetch("http://localhost:3000/api/postagens")
            .then((res) => res.json())
            .then((data) => setPostagens(data))
            .catch((err) => console.error("Erro ao carregar postagens do feed:", err));
    }, []);

    return (
        <>
        <section className="feed">
                <div id="ftperfil">
                    <img className="perfil" src="https://i.pinimg.com/736x/29/7b/2c/297b2c752bb8fe5dc4f640b4c6f213ed.jpg" alt="Perfil" />
                    <h2>Breno Nascimento</h2>
                </div>
                
                <div id="ftdestaques"> 
                    <img className="destaques" src="https://i.pinimg.com/736x/f5/11/f2/f511f2ba4237662faa5a7e887e48453a.jpg" alt="Perfil" />
                    <img className="destaques" src="https://i.pinimg.com/736x/f5/11/f2/f511f2ba4237662faa5a7e887e48453a.jpg" alt="Perfil" />
                    <img className="destaques" src="https://i.pinimg.com/736x/f5/11/f2/f511f2ba4237662faa5a7e887e48453a.jpg" alt="Perfil" />
                    <img className="destaques" src="https://i.pinimg.com/736x/f5/11/f2/f511f2ba4237662faa5a7e887e48453a.jpg" alt="Perfil" />
                    <img className="destaques" src="https://i.pinimg.com/736x/f5/11/f2/f511f2ba4237662faa5a7e887e48453a.jpg" alt="Perfil" />
                    <img className="destaques" src="https://i.pinimg.com/736x/f5/11/f2/f511f2ba4237662faa5a7e887e48453a.jpg" alt="Perfil" />
                     <img className="destaques" src="https://i.pinimg.com/736x/f5/11/f2/f511f2ba4237662faa5a7e887e48453a.jpg" alt="Perfil" />
                </div>
                <div>
                    <Link to="/perfil">
                        <button type="button" className="btn" >Perfil</button>
                    </Link>
                    <Link to="/configuracao">
                        <button type="button" className="btn" >Configuração</button>
                    </Link>
                </div>
                <div id="feeds">
                    <h4>
                        <h5>Breno silva</h5>
                        Brownie recheado 
                    </h4>
                    <img src="https://i.pinimg.com/736x/0e/8b/41/0e8b412584899c8ae16b37265aaf550d.jpg" alt="Brownie" />
                    <h4>
                        <h5>Jão silva</h5>
                        A Pantera Cor-de-Rosa finalmente foi pega.
                    </h4>
                    <img src="https://i.pinimg.com/736x/19/3e/27/193e27a9a0182a4b3b2c5a15746f45ee.jpg" alt="Brownie" />
                    <h4>
                        <h5>Brena jose</h5>
                        Brownie recheado 
                    </h4>
                    <img src="https://i.pinimg.com/736x/0e/8b/41/0e8b412584899c8ae16b37265aaf550d.jpg" alt="Brownie" />
                    <h4>
                        <h5>Jose luan</h5>
                        Brownie recheado 
                    </h4>
                    <img src="https://i.pinimg.com/736x/0e/8b/41/0e8b412584899c8ae16b37265aaf550d.jpg" alt="Brownie" />
                </div>
            </section>
        </>
    );
}

export default Feed;
