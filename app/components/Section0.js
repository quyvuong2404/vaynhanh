var React = require('react');

module.exports = React.createClass({
	render: function(){
		return(
			<section id="faq" className="faq-section sec-padded-1x z-depth-1">
	            <div className="container">
	                <div className="row">
	                    <div className="col s12 m6 l5">
	                        <div className="center-heading">
	                            <h3 className="white-text">VAY THẾ CHẤP</h3>
	                            <span className="center-line red"></span>
	                            <p className="white-text">Các hình thức vay thế chấp</p>
	                        </div>
	                        <ul className="collapsible z-depth-2 left-align" data-collapsible="accordion">
	                            <li>
	                                <div className="collapsible-header active"><i className="ion-android-more-vertical"></i><strong>CHO VAY BỔ SUNG VỐN LƯU ĐỘNG</strong></div>
	                                <div className="collapsible-body">
	                                	<ul className="content">
	                                		<li>Đáp ứng nhu cầu vốn lưu động thường xuyên, tăng tính chủ động cho khách hàng trong việc thực hiện kế hoạch sản xuất kinh doanh.</li>
	                                		<li>Xem xét cấp hạn mức tín dụng cho khách hàng trong thời gian 03 năm mà không cần làm lại thủ tục vay mới.</li>
	                                	</ul>
	                                </div>
	                            </li>
	                            <li>
	                                <div className="collapsible-header"><i className="ion-android-more-vertical"></i><strong>CHO VAY ĐẦU TƯ MÁY MÓC THIẾT BỊ</strong></div>
	                                <div className="collapsible-body">
	                                	<ul className="content">
	                                		<li>Đáp ứng nhu cầu vốn trung dài hạn để doanh nghiệp đầu tư máy móc thiết bị (MMTB) phục vụ hoạt động sản xuất kinh doanh.</li>
	                                		<li>Vốn gốc được trả dần thành nhiều kỳ trong suốt thời gian vay, có thể xét ân hạn trả gốc trong thời gian đầu.</li>
	                                	</ul>
	                                </div>
	                            </li>
	                            <li>
	                                <div className="collapsible-header"><i className="ion-android-more-vertical"></i><strong>CHO VAY ĐẦU TƯ NHÀ XƯỞNG, NHÀ KHO, VĂN PHÒNG</strong></div>
	                                <div className="collapsible-body">
	                                	<ul className="content">
	                                		<li>Đáp ứng nhu cầu vốn thanh toán tiền mua đất, thuê đất và tiền xây dựng, sửa chữa nhà xưởng, nhà kho, văn phòng (bao gồm cả nhà xưởng, nhà kho, văn phòng trong và ngoài khu công nghiệp, khu kinh tế, khu công nghệ cao).</li>
	                                		<li>Tiền lãi tính trên dư nợ giảm dần.<br/>Dư nợ gốc có thể trả hàng tháng, hàng quý hoặc hàng 06 tháng (có thể được ân hạn trả gốc trong thời gian đầu).</li>
	                                	</ul>
	                                </div>
	                            </li>
	                            <li>
	                                <div className="collapsible-header"><i className="ion-android-more-vertical"></i><strong>CHO VAY ĐẦU TƯ XE Ô TÔ</strong></div>
	                                <div className="collapsible-body">
	                                	<ul className="content">
	                                		<li>Đáp ứng nhu cầu vốn đầu tư xe ô tô để kinh doanh vận tải.</li>
	                                		<li>Tiền lãi tính trên dư nợ giảm dần. Vốn gốc được trả dần thành nhiều kỳ trong suốt thời gian vay và có thể ân hạn trả gốc trong thời gian đầu (tối đa 06 tháng).</li>
	                                	</ul>
	                                </div>
	                            </li>
	                            <li>
	                                <div className="collapsible-header"><i className="ion-android-more-vertical"></i><strong>CHO VAY KINH DOANH XE Ô TÔ</strong></div>
	                                <div className="collapsible-body">
	                                	<ul className="content">
	                                		<li>Đáp ứng nhu cầu vốn thanh toán tiền mua xe đối với các doanh nghiệp kinh doanh xe ô tô.</li>
	                                		<li>Không cần phải có BĐS thế chấp, có thể thế chấp bằng chính xe mua (không giữ xe,chỉ giữ hồ sơ xe).</li>
	                                		<li>Xem xét cấp hạn mức tín dụng cho khách hàng trong thời gian 03 năm mà không cần làm lại thủ tục vay mới.</li>
	                                	</ul>
	                                </div>
	                            </li>
	                        </ul>
	                    </div>
	                    <div className="col m6 l7 features-section-row right white-text" style={{marginTop:'20px'}}>
	                        <div className="features-section-box left two">
	                            <i className="ion-ios-pricetags z-depth-1 trans-effect" style={{textShadow: 'none',boxShadow:'none',color:'white'}}></i>
	                            <div className="features-text ">
	                                <h4 className="trans-effect">Điều kiện vay thế chấp</h4>
	                                <p>Khách hàng vay thế chấp phải trên 18 tuổi và không quá 60 tuổi.<br/>Khoản vay được đảm bảo bằng tài sản thế chấp như sổ đỏ hoặc các tài sản giá trị, phương tiện vận tải,…<br/>Khách hàng vay vốn cần có mục đích vay cụ thể và hợp pháp.<br/>Có đủ khả năng tài chính để đảm bảo trả nợ khoản vay.</p>
	                            </div>
	                        </div>
	                        <div className="features-section-box right top four">
	                            <i className="ion-cash z-depth-1 trans-effect" style={{textShadow:'none',boxShadow:'none',color:'white'}}></i>
	                            <div className="features-text ">
	                                <h4 className="trans-effect">Hồ sơ thủ tục vay thế chấp</h4>
	                                <p>Giấy đề nghị vay vốn thế chấp ngân hàng theo mẫu.<br/>Giấy tờ tuỳ thân khách hàng: bản sao giấy CMND, hộ khẩu, đăng ký tạm trú.<br/>Giấy chứng nhận đăng ký kinh doanh (đối với khách hàng vay vốn kinh doanh).<br/>Hồ sơ chưng minh nguồn thu nhập: bảng lương và các giấy tờ chứng minh thu nhập từ nguồn thu kinh doanh.<br/>Giấy tờ phương án sử dụng vốn vay hợp pháp.<br/>Giấy tờ liên quan đến tài sản thế chấp, giấy tờ liên quan đến bất động sản, giấy tờ có giá,….</p>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </section>
        );
	}
});