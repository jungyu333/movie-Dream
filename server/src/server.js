import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import client from "./connection.js";
import SearchRouter from "./routes/search.js";

dotenv.config();

const app = express();

app.set("etag", false);

/*
async function bootstrap() {
  try {
    client.ping();
    console.log("elasticsearch connected");
  } catch (e) {
    console.log(e);
  }
}

bootstrap();
*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/api/search", SearchRouter);

app.get("/", (req, res) => {
  res.send("Hello express!");
});

app.listen(4000, () => {
  console.log(`server is open on port ${4000}!`);
});
