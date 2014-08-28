'use strict';

var agitoHttpRedirection = function() {

  var action = {};

  /**
   * @type {String}
   */
  action.name = 'http-redirection';

  /**
   * @type {String}
   */
  action.protocol = 'http';

  /**
   * @param {http.ClientRequest} request - The HTTP request
   * @param {http.ServerResponse} response - The HTTP response
   * @param {Options} options - Action option
   */
  action.fn = function(request, response, options) {
    response.statusCode = options.code || 301;
    response.setHeader('Location', options.target);
    response.end();
  };

  return function() {
    this.actions.push(action);

    return this.done();
  };

};

module.exports = agitoHttpRedirection;
