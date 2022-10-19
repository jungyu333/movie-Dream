import express from 'express';
import getMovies from '../services/mainSearchService.js';
import getMovie from '../services/movieSearchService.js';
import getMoiveReview from '../services/moviewReviewSearchService.js';
import getMoiveGroup from '../services/movieGroupSearchService.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  var queryParams = req.query;

  await getMovies(queryParams, function (err, results) {
    if (err) {
      res.send(500, 'server Error');
      return;
    }

    res.status(200).json(results);
  });
});

router.get('/movie', async (req, res, next) => {
  var queryParams = req.query;

  await getMovie(queryParams, function (err, results) {

    if (err) {
      res.send(500, 'server Error');
      return;
    }

    res.status(200).json(results);
  });
});

router.get('/review', async (req, res, next) => {
  var queryParams = req.query;

  await getMoiveReview(queryParams, function (err, results) {

    if (err) {
      res.send(500, 'server Error');
      return;
    }

    res.status(200).json(results);
  });
});

router.post('/group', async (req, res, next) => {

  var queryParams = req.body;

  await getMoiveGroup(queryParams, function (err, results) {

    if (err) {
      res.send(500, 'server Error');
      return;
    }

    res.status(200).json(results);
  });
});

export default router;
