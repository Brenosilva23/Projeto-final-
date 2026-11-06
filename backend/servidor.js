import express from 'express'
import cors from 'cors' 

const app = express()
const PORTA = 3000

app.use(cors())
app.use(express.json())

const dadosSistema = {
    perfil: {
        nome: "Breno Silva",
        biografia: "Estudante de TI que ainda está tentando entender se o problema é o código ou a minha vida. Minha mente está igual a uma aba do Chrome...",
        foto: "https://pinimg.com"
    },
    feed: [
        { id: 1, autor: "Breno silva", legenda: "Brownie recheado", imagem: "https://pinimg.com" },
        { id: 2, autor: "Jão silva", legenda: "A Pantera Cor-de-Rosa finalmente foi pega.", imagem: "https://pinimg.com" }
    ]
}


app.get('/api/perfil', (req, res) => {
    res.json(dadosSistema.perfil)
})

app.get('/api/feed', (req, res) => {
    res.json(dadosSistema.feed)
})


app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
})
