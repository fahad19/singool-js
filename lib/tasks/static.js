// Generated by CoffeeScript 1.6.1
(function() {
  var Server, Static,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Server = require('./Server');

  Static = (function(_super) {

    __extends(Static, _super);

    function Static(singool) {
      this.singool = singool;
      this.serveStatic = true;
    }

    Static.prototype.description = 'Build and serve static files';

    return Static;

  })(Server);

  module.exports = Static;

}).call(this);
