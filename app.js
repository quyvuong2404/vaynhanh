var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./app/components/Main');

// Import style sheet
require('./public/css/ionicons.min.css');
require('./public/css/materialize.min.css');
require('./public/css/flexslider.css');
require('./public/css/sweetalert.css');
require('./public/css/style.css');

'use strict';

ReactDOM.render(<Main />, document.getElementById('app'));