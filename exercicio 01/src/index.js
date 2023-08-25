const express = require('express')

const app = express()

const usuarios = [
    { id: 11, nome: 'João', idade: 23 },
    { id: 12, nome: 'José', idade: 25 },
    { id: 13, nome: 'Leia', idade: 29 },
    { id: 14, nome: 'Joaquim', idade: 23 },
]


app.get('/usuarios', (requisicao, resposta) => {

    resposta.send(usuarios)

})

app.listen(3000)