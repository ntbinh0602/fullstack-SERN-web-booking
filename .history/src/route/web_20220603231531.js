import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return homeController;
  });
  return app.use("/", router);
};

module.exports = initWebRoutes;
