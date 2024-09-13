import express, { request, response } from "express";
import mongoose, { mongo } from "mongoose";

import User from "./models/User.js";

const app = express();

//Avisando para API que vamos usar JSON
app.use(express.json());

app.get("/users", async (request, response) => {

    const users = await User.find()

    return response.status(200).json(users);
});

app.post("/users", async (request, response) => {
    const user = request.body;

    const newUser = await User.create(user);

    return response.status(201).json(newUser);
});

//Conexão com banco MongoDB
mongoose
    .connect(
        "mongodb+srv://maikewilliamb:TAVICtRqCrdS5KmC@cluster0.loj0q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("Banco de dados conectado"))
    .catch(() => console.log("Deu ruim"));

app.listen(3000);
