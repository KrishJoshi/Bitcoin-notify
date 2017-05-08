import express from "express";
import {getAllData, getLowestFromDays, getDays} from '../apis/api'

const router = express.Router();

/* All data */
router.get('/default', function(req, res, next) {
  getAllData().then(data => res.send(data))
});
//
router.get('/days/:days/lowest/', function(req, res, next) {
  getLowestFromDays(req.params.days).then(data => res.send(data))
});

router.get('/days/:days', function(req, res, next) {
  getDays(req.params.days).then(data => res.send(data))
});

module.exports = router;
