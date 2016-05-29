var React = require('react');

module.exports = React.createClass({
	componentDidMount: function(){
		$('ul.tabs').tabs();
	},

	render: function(){
		return(
			<section id="describe" className="describe-section z-depth-1">
				<div className="overlay-green-shade-2"></div>
	            <div className="sec-padded-4x">
	                <div className="container">
	                    <div className="row" style={{marginBottom:0}}>
	                        <div className="col s12 l8 offset-l2">
	                            <div className="center-heading">
	                                <h3 className="white-text">Vay Tín Chấp</h3>
	                                <span className="center-line red"></span>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="row" style={{marginBottom:0}}>
	                        <div id="tab-heart" className="col s12 tab-content wow fadeIn">
	                        	<div className="col s12 m4 l3 left-align">
	                        		<h3 className="center">Đặc Điểm</h3>
	                        		<p>Hạn mức cho vay tối đa lên tới 10 tháng lương, không quá 500 triệu đồng.</p>
	                        		<p>Thời gian cho vay tối đa lên đến 48 tháng.</p>
	                        		<p>Số tiền trả hàng tháng bằng nhau, trong đó lãi theo dư nợ giảm dần.</p>
	                        		<p>Thủ tục cho vay đơn giản, lãi suất cạnh tranh và thời gian phê duyệt nhanh chóng.</p>
	                        	</div>
		                        <div className="col s12 m8 l9">
		                        	<div className="col s12 m12 l6">
		                                <h3 className="center">Tín Chấp Cá Nhân</h3>
		                                <ul className="number-style left-align">
		                                    <li>Điều kiện vay tín chấp theo lương
		                                    	<ul className="list-style">
		                                    		<li>Công tác tại công ty trên 3 tháng.</li>
		                                    		<li>Tổng thu nhập tối thiểu 3 triệu (bao gồm lương + thu nhập).</li>
													<li>Có hợp đồng lao động.</li>
		                                    	</ul>
		                                    </li>
		                                    <li>Điều kiện vay theo bảo hiểm nhân thọ
		                                    	<ul className="left-align list-style">
		                                    		<li>Hợp đồng bảo hiểm nhân thọ trên 1 năm.</li>
		                                    		<li>Chấp nhận tất cả các hợp đồng bảo hiểm : AIA, PRUDENTIAL, MANULIFE, CATHAY LIFE …</li>
		                                    	</ul>
		                                    </li>
		                                    <li>Điều kiện vay theo hóa đơn tiền điện
		                                    	<ul className="left-align list-style">
		                                    		<li>Hóa đơn điện phải trên 300 ngàn/ tháng.</li>
		                                    		<li>Người đi vay phải là người đứng tên trên hóa đơn tiền điện.</li>
		                                    	</ul>
		                                    </li>
		                                </ul>
		                            </div>
		                            <div className="col s12 m12 l6 left-align">
		                                <h3 className="center">Cho Vay Hộ Kinh Doanh</h3>
		                                <p>Nhằm hỗ trợ cho tiểu thương các trợ có thêm nguồn vốn kinh doanh.</p>
		                                <p>Gói chương trình cho vay tiểu thương 100 triệu sẽ được triển khai từ với lãi suất ưu đãi nhất 1.4%/tháng, không dùng tài sản đảm bảo.</p>
		                                <p>Ưu đãi cho vay tiểu thương chợ.</p>
		                            </div>
		                        </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </section>
		);
	}
});