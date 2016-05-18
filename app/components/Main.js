var React = require('react');
var Preloader = require('./Preloader');
var Nav = require('./Nav');
var Body = require('./Body');

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<Preloader />
				<Nav />
				<Body />
			</div>
		);
	}
});