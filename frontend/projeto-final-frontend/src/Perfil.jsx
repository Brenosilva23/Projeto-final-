import React from "react";
import { Link } from "react-router-dom";



function Perfil() {
    return (
        <>
            <section id="pagina">
                <div id="cabecalho">
                    <div id="ftperfil">
                        <img className="perfil" src="https://i.pinimg.com/736x/39/14/d4/3914d474cbba4e9bd8a17ab5e7834149.jpg" alt="" />
                    </div>
                    <div id="txperfil">
                        <strong><h2>Breno Silva</h2></strong>
                        <p>
                            Estudante de TI que ainda está tentando entender se o problema é o código ou a minha vida. <br />
                            Minha mente está igual a uma aba do Chrome: 50 guias abertas, travada e com uma música tocando que não sei de onde vem.<br />
                            Navegando no mundo da tecnologia sem saber se dou um commit ou se choro. 🛠️
                        </p>
                    </div>
                    <div className="confs">
                        <Link to="/feed">
                            <button type="button" className="btn" >Feed</button>
                        </Link>
                        <Link to="/configuracao">
                            <button type="button" className="btn" >Configuração</button>
                        </Link>
                    </div>
                </div>
                <div id="conteudo">
                    <div id="destaques">
                        <figure>
                            <img className="ftdestaque" src="https://i.pinimg.com/736x/5b/8e/47/5b8e474b013d03f644c53825feddc77b.jpg" alt="" />
                        </figure>
                        <figure>
                            <img className="ftdestaque" src="https://i.pinimg.com/736x/c6/5a/9b/c65a9bb5f793ee17f106c605652bcf4b.jpg" alt="" />
                        </figure>
                        <figure>
                            <img className="ftdestaque" src="https://i.pinimg.com/736x/38/b2/1c/38b21cb4773f321abce23ac2e6cd22c4.jpg" alt="" />
                        </figure>
                        <figure>
                            <img className="ftdestaque" src="https://i.pinimg.com/736x/5e/55/06/5e55063eaf7c6533249c90225dc0101e.jpg" alt="" />
                        </figure>
                        <figure>
                            <img className="ftdestaque" src="https://i.pinimg.com/736x/f9/41/cb/f941cbf1516f22508100b9bfca724c05.jpg" alt="" />
                        </figure>
                        <figure>
                            <img className="ftdestaque" src="https://i.pinimg.com/236x/8e/ed/33/8eed33c08195bf47892f4986816c71b0.jpg" alt="" />
                        </figure>
                    </div>

                    <div id="feed">
                        <img src="https://i.pinimg.com/736x/b3/69/b8/b369b8772a2f560021129b5645fb3dfb.jpg" alt="" />
                        <img src="https://i.pinimg.com/736x/b3/69/b8/b369b8772a2f560021129b5645fb3dfb.jpg" alt="" />
                        <img src="https://i.pinimg.com/736x/b3/69/b8/b369b8772a2f560021129b5645fb3dfb.jpg" alt="" />
                        <img src="https://i.pinimg.com/736x/b3/69/b8/b369b8772a2f560021129b5645fb3dfb.jpg" alt="" />
                        <img src="https://i.pinimg.com/736x/b3/69/b8/b369b8772a2f560021129b5645fb3dfb.jpg" alt="" />
                        <img src="https://i.pinimg.com/736x/b3/69/b8/b369b8772a2f560021129b5645fb3dfb.jpg" alt="" />
                        <img src="https://i.pinimg.com/736x/b3/69/b8/b369b8772a2f560021129b5645fb3dfb.jpg" alt="" />
                        <img src="https://i.pinimg.com/736x/b3/69/b8/b369b8772a2f560021129b5645fb3dfb.jpg" alt="" />
                        <img src="https://i.pinimg.com/736x/b3/69/b8/b369b8772a2f560021129b5645fb3dfb.jpg" alt="" />
                        <img src="https://i.pinimg.com/736x/b3/69/b8/b369b8772a2f560021129b5645fb3dfb.jpg" alt="" />
                        <img src="https://i.pinimg.com/736x/b3/69/b8/b369b8772a2f560021129b5645fb3dfb.jpg" alt="" />
                        <img src="https://i.pinimg.com/736x/b3/69/b8/b369b8772a2f560021129b5645fb3dfb.jpg" alt="" />
                        <img src="https://i.pinimg.com/736x/b3/69/b8/b369b8772a2f560021129b5645fb3dfb.jpg" alt="" />
                        <img src="https://i.pinimg.com/736x/b3/69/b8/b369b8772a2f560021129b5645fb3dfb.jpg" alt="" />
                        <img src="https://i.pinimg.com/736x/b3/69/b8/b369b8772a2f560021129b5645fb3dfb.jpg" alt="" />
                    </div>
                </div>

                <div id="Contatos">
                    <a target="_blank" rel="noopener noreferrer" className="link linkedin" href="https://linkedin.com">Breno Silva</a>
                    <a target="_blank" rel="noopener noreferrer" className="link git" href="https://github.com">Github Breno</a>
                    <a target="_blank" rel="noopener noreferrer" className="link spotify" href="https://spotify.com">Spotify Breno</a>
                </div>
            </section>
        </>
    );
}

export default Perfil;
