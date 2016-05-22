var React = require('react');

module.exports = React.createClass({
	render: function(){
		return(
			<section id="section0" className="section faq-section sec-padded-1x z-depth-1">
	            <div className="container">
	                <div className="row">
	                    <div className="col m5 l6 hide-on-small-only center">
	                        <img src="public/images/bg-screen-2.png" alt="" className="responsive-img" />
	                    </div>
	                    <div className="col s12 m7 l6">
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
	                </div>
	            </div>
	        </section>
        );
	}
});