var React = require('react');
var Gmap = require('./Gmap');

module.exports = React.createClass({
	componentDidMount: function(){
		$('#map').css('height', $('.address-block').outerHeight() + 'px');

		$('.flexslider').flexslider({
		    animation: "slide",
		    animationLoop: false,
		    itemWidth: 210,
		    itemMargin: 5,
		    minItems: 1,
		    maxItems: 5,
		});
	},

	render: function(){
		return (
			<section id="location" className="location-section">
				<div className="container">
					<div className="flexslider sponsor">
						<ul className="slides">
		                    <li> 
		                        <img src="public/images/sponsor1.jpg" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor2.jpg" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor3.png" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor4.jpg" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor5.jpg" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor6.jpg" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor7.jpg" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor8.png" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor9.jpg" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor10.jpg" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor11.jpg" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor12.jpg" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor13.jpg" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor14.jpg" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor15.gif" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor16.jpg" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor17.jpg" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor18.jpg" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor19.jpg" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor20.jpg" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor21.jpg" />
		                    </li>
		                    <li> 
		                        <img src="public/images/sponsor22.jpg" />
		                    </li>
		                </ul>
					</div>
				</div>
            	<div className="container-fluid">
	                <div className="row btm-mrgn-0">
	                    <div className="col s12 m6 l6 address-block">
	                        <div className="center-heading left-align">
	                            <h3>Thông Tin Liên Hệ</h3>
	                            <span className="center-line red"></span>
	                            <p>Quý khách có thắc mắc xin hãy liên hệ với nhân viên để được tư vấn.</p>
	                        </div>
	                        <ul>
	                            <li><p>Đường D3 Võ Thị Sáu</p>
	                                <p>Phường Thống Nhất</p>
	                                <p>Biên Hòa, Đồng Nai</p>
	                            </li>
	                            <li><p>0933935847</p></li>
	                            <li><p>vohao26@gmail.com</p></li>
	                        </ul>
	                        <a className="modal-trigger waves-effect waves-light btn red center md-trigger" data-modal="m-contact">Đăng Ký</a>
	                    </div>
	                    <div className="col s12 m6 l6 map-block">
	                        <div id="map"><Gmap /></div>
	                    </div>
	                </div>
	            </div>
            </section>
		);
	}
});