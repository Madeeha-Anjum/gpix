import express from "express";
import cors from "cors";
import { Router } from "./routes/gStorage.router";

const createApp = () => {
  const app = express();

  // enables cors for all routes
  app.use(cors({ origin: "*" }));

  // landing page
  app.get("/", (req, res) => {
    console.log("Hello World!");
    res.send("Hello World!");
  });

  // add api routes
  app.use("/api/v1", Router);

  return app;
};

export default createApp;
