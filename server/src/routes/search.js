import express from "express";
import getMoives from "../services/mainSearchService.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  const queryParams = req.query;

  await getMoives(queryParams, function (err, results) {
    if (err) {
      res.send(500, "server Error");
      return;
    }

    res.json(results);
  });
});

export default router;
