import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.use(cors());
// Adiciona cabeçalhos HTTP que informam aos navegadores para permitir que uma aplicação Web seja executada em uma origem e acesse recursos de outra origem diferente

app.use(express.urlencoded({ extended: false }));
// Converte caractéres especiais nas URL's

app.listen(process.env.PORT, () =>
  console.log("Servidor iniciado", process.env.PORT)
);

app.get("/", (request: Request, response: Response) => {
  return response.send("OK");
});
