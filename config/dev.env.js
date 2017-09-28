var merge = require('webpack-merge');
var prodEndv = require('./prod.env');

module.exports = merge(prodEndv, {
    NODE_ENV: '"development"'
});