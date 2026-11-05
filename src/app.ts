import type { Application } from "express";

import movies from "./routes/movies.js";
import express from "express";

const app: Application = express();

app.use(express.json());
app.use(movies);

export default app;
