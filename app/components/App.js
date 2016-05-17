var React = require('react');
var Preloader = require('./Preloader');

module.exports = React.createClass({
	componentWillMount: function(){
	},

	componentDidMount: function(){
		$('#fullpage').hide();
		setTimeout(function(){
			$('.preloader').fadeOut('slow');

			$('#fullpage').show();

			$('#fullpage').fullpage({
				'verticalCentered': false,
				'css3': true,
				'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
				'navigation': true,
				'navigationPosition': 'right',
				'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],

				'afterLoad': function(anchorLink, index){
					if(index == 2){
						$('#iphone3, #iphone2, #iphone4').addClass('active');
					}
				},

				'onLeave': function(index, nextIndex, direction){
					if (index == 3 && direction == 'down'){
						$('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
					}
					else if(index == 3 && direction == 'up'){
						$('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
					}

					$('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
					$('#staticImg').toggleClass('moveDown', nextIndex == 4);
					$('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
				}
			});
		}, 2000);
	},

	render: function(){
		return (
			<div>
				<Preloader />
				<div id="fullpage">
					<div className="section " id="section0">
						<h1>Apple fullPage.js Demo</h1>
						<img src="public/images/iphone1.jpg" alt="iphone" />
					</div>
					<div className="section" id="section1">
						<div className="wrap">
							<div className="public/imagesContainer">
								<img src="public/images/iphone2.png" alt="iphone" id="iphone2" />
								<img src="public/images/iphone3.png" alt="iphone" id="iphone3" />
								<img src="public/images/iphone4.png" alt="iphone" id="iphone4" />
							</div>

							<div className="box">
								<h2>A powerful plugin</h2>
								 <strong>fullPage.js</strong>  callbacks allow you to create amazing dynamic sites with a bit of imagination. This example tries to reproduce the Apple iPhone-5c website animations as an example of what fullPage.js is capable of.
							</div>
						</div>
					</div>

					<div className="section moveDown" id="section2">
						<div className="wrap">
							<div className="public/imagesContainer">
								<img src="public/images/iphone-yellow.png" alt="iphone" id="iphone-yellow" />
								<img src="public/images/iphone-red.png" alt="iphone" id="iphone-red" />
								<img src="public/images/iphone-blue.png" alt="iphone" id="iphone-blue" />
							</div>

							<div className="box">
								<h2>Amazing stuff</h2>
								Combining <strong>fullPage.js</strong> with your own CSS styles and animations, you will be able to create something remarkable.
							</div>
						</div>
					</div>
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
			</div>
		);
	}
});