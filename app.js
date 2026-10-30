import express from "express";
import pets from "./pets.js";

const app = express();
const port = 3000;

app.get("/", (requisicao, resposta)=>{
    resposta.send(pets)
});

app.get("/:nome", (requisicao, resposta) => {
    const nomeInformado = requisicao.params.nome.toLocaleLowerCase();
    const pet = pets.find((infoPet) => infoPet.nome === nomeInformado)

    if (pet === undefined) {
        resposta.status(404).send("Não existe o Pet informado.");
    }

    resposta.send(pet);
})



app.listen(3000, () => console.log(`Servidor rodando na porta ${port}`));