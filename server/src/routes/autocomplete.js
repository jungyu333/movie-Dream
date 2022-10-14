import express from 'express';
import getMovieNamesAuto from '../services/autocompleteService.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  var queryParams = req.query;

  await getMovieNamesAuto(queryParams, function (err, results) {
    if (err) {
      res.send(500, 'server Error');
      return;
    }

    res.json(results);
  });
});

export default router;
