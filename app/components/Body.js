var React = require('react');
var Section0 = require('./Section0');
var Section1 = require('./Section1');
var Section2 = require('./Section2');
var Section3 = require('./Section3');
var Section4 = require('./Section4');
var Section5 = require('./Section5');

module.exports = React.createClass({
	componentDidMount: function(){
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
				'navigationTooltips': ['Home', 'fullPage.js', 'Powerful', 'Amazing', 'Simple'],
				'anchors': ['page0', 'page1', 'page2', 'page3', 'page4', 'page5'],
				'menu': '#menu',

				'onLeave': function(index, nextIndex, direction){
					if (index == 4 && direction == 'down'){
						$('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
					}
					else if(index == 4 && direction == 'up'){
						$('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
					}
				}
			});
	},

	render: function(){
		return(
			<div id="fullpage">
				<Section5 />
				<Section0 />
				<Section3 />
				<Section4 />
			</div>
		);
	}
});