import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import client from "./connection.js";

dotenv.config();

const app = express();

async function bootstrap() {
  try {
    client.ping();
    console.log("elasticsearch connected");
  } catch (e) {
    console.log(e);
  }
}

bootstrap();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello express!");
});

app.listen(process.env.PORT, () => {
  console.log(`server is open on port ${process.env.PORT}!`);
});
