var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./app/components/App');
require('./public/css/examples.css');
require('./public/css/jquery.fullPage.css');
require('./public/css/style.css');

'use strict';

ReactDOM.render(<App />, document.getElementById('app'));