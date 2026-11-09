import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Editar() {
    const navigate = useNavigate();
  
    const [nome, setNome] = useState("");
    const [bio, setBio] = useState("");
    const [ftPerfil, setFtPerfil] = useState("");
  
    // Busca os dados atuais do backend ao carregar a página
    useEffect(() => {
      fetch("http://localhost:3000/api/perfil")
        .then((res) => res.json())
        .then((data) => {
          setNome(data.nome);
          setBio(data.bio);
          setFtPerfil(data.ftPerfil);
        })
        .catch((err) => console.error("Erro ao buscar dados do perfil:", err));
    }, []);
  
    const handleSalvar = (e) => {
      e.preventDefault();
  
      // Envia os dados atualizados para o seu backend Express
      fetch("http://localhost:3000/api/perfil", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, bio, ftPerfil }),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Erro ao atualizar");
          return res.json();
        })
        .then(() => {
          alert("Perfil atualizado com sucesso no servidor!");
          navigate("/perfil"); // Redireciona de volta para a visualização do perfil
        })
        .catch((err) => {
          console.error("Erro ao salvar:", err);
          alert("Não foi possível salvar as alterações.");
        });
    };

  return (
    <main id="pagina">
      
      <header id="cabecalho">
        <div id="ftperfil">
          <img className="perfil" src={ftPerfil} alt="Perfil" />
        </div>

        <div id="txperfil">
          <h1>Editar Perfil</h1>
          <p>Altere suas informações de exibição abaixo.</p>
        </div>

        <div className="confs">
          <Link to="/feed">
            <button type="button" className="btn">Cancelar</button>
          </Link>
        </div>
      </header>

      <div id="conteudo">
        <form onSubmit={handleSalvar} className="form-editar">
          
          <div className="campo-input">
            <label>URL da Foto:</label>
            <input 
              type="text" 
              value={ftPerfil} 
              onChange={(e) => setFtPerfil(e.target.value)} 
            />
          </div>

          <div className="campo-input">
            <label>Nome:</label>
            <input 
              type="text" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
            />
          </div>

          <div className="campo-input">
            <label>Biografia:</label>
            <textarea 
              value={bio} 
              onChange={(e) => setBio(e.target.value)} 
              rows="5"
            />
          </div>

          <div className="acoes-form">
            <button type="submit" className="btn-salvar">
              Salvar Alterações
            </button>
          </div>

        </form>
      </div>

    </main>
  );
}

export default Editar;
