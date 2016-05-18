var React = require('react');
var Section0 = require('./Section0');
var Section1 = require('./Section1');
var Section2 = require('./Section2');

module.exports = React.createClass({
	componentDidMount: function(){
		$('#fullpage').hide();
		setTimeout(function(){
			$('#fullpage').show();

			$('#fullpage').fullpage({
				'verticalCentered': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
				'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],
				'anchors': ['page1', 'page2', 'page3', 'page4', 'page5'],
				'menu': '#menu',

				'onLeave': function(index, nextIndex, direction){
					if (index == 3 && direction == 'down'){
						$('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
					}
					else if(index == 3 && direction == 'up'){
						$('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
					}
				}
			});
		}, 2000);
	},

	render: function(){
		return(
			<div id="fullpage">
				<Section0 />
				<Section1 />
				<Section2 />
				<div className="section moveDown" id="section3">
					<div className="wrap">
						<div className="box">
							<h2>Just a demo</h2>
							This is, of course, just a demo. I didn't want to spend much time on it.
							Don't expect it to work perfectly in all kind of screens.
							It has been designed to work on 1180px width or over on modern browsers with CSS3.
						</div>
					</div>
					<div className="imgsContainer">
						<img src="public/images/iphone-two.png" alt="iphone" id="iphone-two" />
					</div>
				</div>
			</div>
		);
	}
});