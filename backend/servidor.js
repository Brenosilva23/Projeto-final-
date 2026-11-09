import express from 'express';
import cors from 'cors';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

const app = express();
app.use(cors());
app.use(express.json());

let db;

async function iniciarBanco() {
  db = await open({
    filename: './banco.db',
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS perfil (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT,
      nome TEXT,
      bio TEXT,
      ftPerfil TEXT
    )
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS postagens (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario TEXT,
      legenda TEXT,
      imagem TEXT
    )
  `);

  const perfilExistente = await db.get("SELECT * FROM perfil LIMIT 1");
  if (!perfilExistente) {
    await db.run(
      `INSERT INTO perfil (username, nome, bio, ftPerfil) VALUES (?, ?, ?, ?)`,
      [
        "brenosilva_",
        "Breno Silva",
        "Estudante de TI tentando entender se o problema é o código ou a minha vida. 🛠️",
        "https://pinimg.com"
      ]
    );

    await db.run(
      `INSERT INTO postagens (usuario, legenda, imagem) VALUES (?, ?, ?)`,
      ["Breno silva", "Brownie recheado", "https://pinimg.com"]
    );
  }

  console.log("Banco de dados SQLite pronto e conectado!");
}

iniciarBanco().catch(err => console.error("Erro ao iniciar o SQLite:", err));

app.post("/api/login", async (req, res) => {
  const { usuario, senha } = req.body;

  if (usuario === "admin" && senha === "admin123") {
    return res.json({ 
      sucesso: true, 
      mensagem: "Login efetuado com sucesso!",
      token: "sessao_admin_valida"
    });
  }

  res.status(401).json({ 
    sucesso: false, 
    mensagem: "Usuário ou senha inválidos." 
  });
});


app.get("/api/perfil", async (req, res) => {
  try {
    const perfil = await db.get("SELECT * FROM perfil LIMIT 1");
    res.json(perfil);
  } catch (err) {
    res.status(500).send("Erro ao buscar o perfil");
  }
});

app.put("/api/perfil", async (req, res) => {
  const { nome, bio, ftPerfil, username } = req.body;
  try {
    await db.run(
      `UPDATE perfil SET 
        nome = COALESCE(?, nome), 
        bio = COALESCE(?, bio), 
        ftPerfil = COALESCE(?, ftPerfil), 
        username = COALESCE(?, username) 
       WHERE id = 1`,
      [nome, bio, ftPerfil, username]
    );

    const perfilAtualizado = await db.get("SELECT * FROM perfil WHERE id = 1");
    res.json({ mensagem: "Perfil updated no SQLite!", perfil: perfilAtualizado });
  } catch (err) {
    res.status(500).send("Erro ao atualizar o perfil");
  }
});

app.get("/api/postagens", async (req, res) => {
  try {
    const postagens = await db.all("SELECT * FROM postagens ORDER BY id DESC");
    res.json(postagens);
  } catch (err) {
    res.status(500).send("Erro ao carregar o feed");
  }
});

app.listen(3000, () => {
  console.log("Servidor do Backend rodando em http://localhost:3000");
});
