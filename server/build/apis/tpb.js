'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.getTorrents = getTorrents;

var _tortuga = require('tortuga');

var _tortuga2 = _interopRequireDefault(_tortuga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTorrents(title) {
  var search = new _promise2.default(function (resolve, rej) {
    _tortuga2.default.search(title, function (results) {
      resolve(results);
    });
  });
  return search;
}