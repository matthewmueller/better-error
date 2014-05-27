/**
 * Module Dependencies
 */

var PrettyError = require('pretty-error');
var tty = process.stdout.isTTY;
var pe = new PrettyError();
var util = require('util');
var format = util.format;
var slice = [].slice;

/**
 * Expose `error`
 */

module.exports = error;

/**
 * Initialize an error
 *
 * @param {String} msg
 * @param {Mixed, ...}
 * @return {Error}
 */

function error(msg) {
  msg = format.apply(util, arguments);

  var err = new Error(msg);

  return tty
    ? pe.render(err)
    : err;
}

throw error('the sky is %s!', 'falling');
