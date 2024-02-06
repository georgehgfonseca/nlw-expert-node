import fastify from "fastify";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";
import cookie from "@fastify/cookie";

const app = fastify();

app.register(cookie, {
  secret: "my-random-secret",
  hook: "onRequest",
});
app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running.");
});

// HTTP methods
// GET POST PUT DELETE PATCH HEAD OPTIONS

// Native Driver
// Acessa BD diretamente por comandos SQL
// https://github.com/porsager/postgres

//ORMs
// Biblioteca mais simples para acesso aos dados
// https://www.prisma.io/
