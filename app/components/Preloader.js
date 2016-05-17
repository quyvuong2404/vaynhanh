var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<div className="preloader">
				<div className="loader-content">
					<img src="public/images/logo.png" />
					<div className="progress">
						<div className="indeterminate"></div>
					</div>
					<h5>Loading</h5>
				</div>
			</div>
		);
	}
});