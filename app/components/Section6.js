var React = require('react');

module.exports = React.createClass({
	componentDidMount: function(){
		$('#testimonial-slider').flexslider({
			animation: "slide"
		});
	},

	render: function(){
		return(
			<section id="testimonials" className="testimonials-section">
	            <div className="sec-padded-3x">
	                <div className="container">
	                    <div className="row btm-mrgn-0">
	                        <div className="col s12 l8 offset-l2">
	                            <div className="center-heading">
	                                <h3>Bảo Hiểm Nhân Thọ<br/>Manulife</h3>
	                                <span className="center-line red"></span>
	                                <p style={{fontSize: "1em"}}>Với 4 sản phẩm bảo hiểm Manulife này khách hàng chỉ cần đóng phí ngắn từ 12 - 15 năm cho các giải pháp tiết kiệm, giáo dục, bảo vệ và lập kế hoạch đến tuổi nghỉ hưu là có thể an tâm được bảo vệ ít nhất 20 năm hoặc lên đến tuổi 99, tùy theo giải pháp bảo hiểm mà khách hàng chọn.</p>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="row center">
	                        <div className="col s12 m10 l10 offset-m1 offset-l1">
	                            <div id="testimonial-slider" className="flexslider">
	                            	<ul className="slides">
		                                <li className="item">
		                                    <div className="testimonials-inner col s12 m12 l12">
		                                    	<span><em>Cuộc Sống An Nhàn</em></span>
		                                        <img src="public/images/manulife2.jpg" alt="" />
		                                        <div className="testimonials-box left-align col s12 m12 l12">
		                                            <p>Sản phẩm này được thiết kế giúp khách hàng độc lập về tài chính khi nghỉ hưu, tự do tận hưởng những ngày vàng an nhàn sau bao năm vì gia đình và cống hiến cho xã hội.</p>
		                                            <p>Tham gia Cuộc Sống An Nhàn, bạn luôn An tâm vui sống với ngân quỹ điều trị 45 bệnh lý nghiêm trọng, bao gồm hỗ trợ điều trị các bệnh lý giai đoạn sớm và được bảo vệ thu nhập trước rủi ro tử vong, thương tật, tai nạn, …</p>
		                                            <p>Trong trường hợp khách hàng để lại các quyền lợi để tích lãi, giá trị tiền mặt đảm bảo của khách hàng sẽ gia tăng đáng kể tại thời điểm khách hàng đạt tuổi 65 khi sản phẩm đáo hạn.</p>
		                                        </div>
		                                    </div>
		                                </li>
		                                <li className="item">
		                                    <div className="testimonials-inner col s12 m12 l12">
			                                    <span><em>Tổ Ấm Bình Yên</em></span>
		                                        <img src="public/images/manulife1.jpg" alt="" />
		                                        <div className="testimonials-box left-align col s12 m12 l12">
		                                            <p>Chỉ cần trả thêm một khoản phí nhỏ khi tham gia bảo hiểm Tổ Ấm Bình Yên của Manulife, bạn và gia đình sẽ an tâm trước những rủi ro khôn lường trong cuộc sống với các Quyền lợi bảo hiểm tăng cường ưu việt kèm theo:</p>
		                                            <ul className="bullet-style">
		                                            	<li>Ngân quỹ điều trị 45 bệnh lý nghiêm trọng, bao gồm hỗ trợ điều trị các bệnh lý giai đoạn sớm</li>
		                                            	<li>Bảo vệ thương tật và tử vong do tai nạn lên đến 300% số tiền bảo hiểm</li>
		                                            	<li>Bảo vệ trọn đời trước rủi ro tử vong lên đến 200% số tiền bảo hiểm</li>
		                                            	<li>Gia tăng quyền lợi bảo vệ cho cả gia đình trước rủi ro nằm viện, tai nạn, bệnh lý nghiêm trọng hay tử vong</li>
		                                            </ul>
		                                        </div>
		                                    </div>
		                                </li>
		                                <li className="item">
		                                    <div className="testimonials-inner col s12 m12 l12">
		                                    	<span><em>Cho Tuổi Thần Tiên</em></span>
		                                        <img src="public/images/manulife3.jpg" alt="" />
		                                        <div className="testimonials-box left-align col s12 m12 l12">
		                                            <p>Cho Tuổi Thần Tiên -  một sản phẩm bảo hiểm mà Manulife cũng như chính cha mẹ mong muốn mang lại cho con mình tất cả những điều tốt đẹp nhất. Một sức khỏe dồi dào, một tuổi thơ trong sáng, một nền giáo dục tốt nhất để nâng bước tương lai tươi sáng cho con yêu.</p>
		                                            <ul className="bullet-style">
		                                            	<li>Bạn sẽ có quỹ tiết kiệm bảo đảm dành riêng cho học vấn của con</li>
		                                            	<li>Hợp đồng đảm bảo liên tục sinh ra tiền mỗi 3 năm giúp linh hoạt chi trả những khoản chi tiêu ngắn hạn</li>
		                                            	<li>Tương lai học vấn của con luôn chu toàn trong mọi hoàn cảnh</li>
		                                            	<li>Bảo vệ con yêu toàn diện trước rủi ro tai nạn, bệnh lý nghiêm trọng và tử vong</li>
		                                            </ul>
		                                            <p>Cũng như một số sản phẩm khác, Cho Tuổi Thần Tiên cũng có quyền lợi miễn đóng phí, vì thế khách hàng có thể hoàn toàn yên tâm rằng toàn bộ phí bảo hiểm của hợp đồng sẽ được miễn nếu khách hàng không may tử vong hay mắc bệnh lý nghiêm trọng.</p>
		                                            <p>Hơn nữa, sản phẩm này còn mang đến cho khách hàng quyền lợi phiếu tiền mặt định kỳ đảm bảo và phiếu tiền mặt nhận thêm (nếu có), nếu không cần thiết dùng thì khách hàng có thể để lại để hưởng lãi, góp phần gia tăng quỹ học vấn cho con trong tương lai.</p>
		                                        </div>
		                                    </div>
		                                </li>
		                                <li className="item">
		                                    <div className="testimonials-inner col s12 m12 l12">
		                                    	<span><em>Cuộc Sống Ước Mơ</em></span>
		                                        <img src="public/images/manulife5.jpg" alt="" />
		                                        <div className="testimonials-box left-align col s12 m12 l12">
		                                            <p>Cuộc Sống Ước Mơ là sản phẩm bảo hiểm nhân thọ Tích lũy thông minh, tự do tận hưởng với ước mơ và khát vọng thay đổi theo từng giai đoạn cuộc đời và nhu cầu của cuộc sống mỗi chúng ta như công việc khi mới ra trường của bạn trẻ, hay hăng hái cho những chuyến du lịch, khám phá thế giới, tìm hiểu thiên nhiên hay trau dồi thêm kiến thức.</p>
		                                            <ul className="bullet-style">
		                                            	<li>Quyền lợi đáo hạn hấp dẫn giúp thực hiện các dự định trong dài hạn</li>
		                                            	<li>Nhận Phiếu Tiền Mặt giúp đáp ứng nhu cầu chi tiêu trong ngắn hạn</li>
		                                            	<li>Bảo vệ thu nhập cho cả gia đình trước những rủi ro không lường trước trong cuộc sống</li>
		                                            	<li>Chỉ với 12/15 năm đóng phí, bạn hoàn toàn yên tâm tận hưởng cuộc sống</li>
		                                            </ul>
		                                        </div>
		                                    </div>
		                                </li>
		                                <li className="item">
		                                    <div className="testimonials-inner col s12 m12 l12">
		                                    	<span><em>QUÀ TẶNG CON YÊU</em></span>
		                                        <img src="public/images/manulife6.jpg" alt="" />
		                                        <div className="testimonials-box left-align col s12 m12 l12">
		                                            <ul className="bullet-style">
		                                            	<li>Các khoản hỗ trợ học tập đều đặn mỗi 3 năm kể từ năm Hợp đồng thứ 6 đến trọn đời giúp trang trải các chi phí học tập, sinh hoạt hoặc hỗ trợ lập nghiệp cho con yêu.</li>
		                                            	<li>Bảo hiểm toàn diện đến 99 tuổi với chỉ với 12 năm đóng phí</li>
		                                            	<li>Bảo vệ thiết thực cho con với quyền lợi trợ cấp cho mỗi ngày điều trị tại các bệnh viện của Việt Nam và nước ngoài tương đương 0,2% Số tiền bảo hiểm đến tuổi 75.</li>
		                                            	<li>Với Quyền lợi Miễn nộp phí bảo hiểm, tương lai học vấn của con bạn luôn được chu toàn dù Bên mua bảo hiểm không may gặp rủi ro.</li>
		                                            	<li>Khoản bảo tức và lãi suất tích lũy hấp dẫn, giúp gia tăng khoản tiền tiết kiệm cho các kế hoạch tài chính trong tương lai.</li>
		                                            </ul>
		                                        </div>
		                                    </div>
		                                </li>
		                                <li className="item">
		                                    <div className="testimonials-inner col s12 m12 l12">
		                                    	<span><em>ĐIỂM TỰA TÀI NĂNG</em></span>
		                                        <img src="public/images/manulife4.jpg" alt="" />
		                                        <div className="testimonials-box left-align col s12 m12 l12">
		                                            <ul className="bullet-style">
		                                            	<li>Hoàn toàn an tâm kế hoạch giáo dục trong tương lai của con bạn với khoản hỗ trợ học tập chắc chắn được chi trả.</li>
		                                            	<li>Tương lai học vấn của con bạn luôn được chu toàn nếu Bên mua bảo hiểm chẳng may tử vong hoặc thương tật toàn bộ và vĩnh viễn với quyền lợi miễn thu phí bảo hiểm</li>
		                                            	<li>An tâm khi có nhu cầu nằm viện điều trị hoặc phẫu thuật khi chọn thêm quyền lợi bảo hiểm y tế cho con yêu</li>
		                                            	<li>Khoản bảo tức và lãi suất tính lũy hấp dẫn, giúp gia tăng khoản tiền tiết kiệm cho các kế hoạch tài chính trong tương lai.</li>
		                                            </ul>
		                                        </div>
		                                    </div>
		                                </li>
		                                <li className="item">
		                                    <div className="testimonials-inner col s12 m12 l12">
		                                    	<span><em>PHÚC THỌ PHU THÊ</em></span>
		                                        <img src="public/images/manulife7.jpg" alt="" />
		                                        <div className="testimonials-box left-align col s12 m12 l12">
		                                            <ul className="bullet-style">
		                                            	<li>Bảo vệ toàn diện trước 31 bệnh lý nghiêm trọng đến tuổi 85.</li>
		                                            	<li>Trợ cấp tiền mặt cho mỗi ngày điều trị tại các bệnh viện của Việt Nam và nước ngoài, tương đương 0,2% Số tiền bảo hiểm đến tuổi 75.</li>
		                                            	<li>Số tiền bảo hiểm tự động gia tăng lên 50% kể từ năm Hợp đồng thứ 11 mà không phải thẩm định.</li>
		                                            	<li>Quyền lợi tiền mặt tương đương 20% Số tiền bảo hiểm chi trả vào năm thứ 20 của Hợp đồng.</li>
		                                            	<li>Khoản bảo tức và lãi suất tích lũy hấp dẫn, giúp gia tăng khoản tiền tiết kiệm cho các kế hoạch tài chính trong tương lai.</li>
		                                            </ul>
		                                        </div>
		                                    </div>
		                                </li>
		                                <li className="item">
		                                    <div className="testimonials-inner col s12 m12 l12">
		                                    	<span><em>TỰ DO MƠ ƯỚC</em></span>
		                                        <img src="public/images/manulife8.jpg" alt="" />
		                                        <div className="testimonials-box left-align col s12 m12 l12">
		                                            <ul className="bullet-style">
		                                            	<li>Hoàn toàn an tâm với quyền lợi bảo hiểm toàn diện đến 99 tuổi với chỉ với 12 năm đóng phí.</li>
		                                            	<li>Đều đặn nhận được các khoản tiền mặt  định kỳ mỗi 3 năm kể từ năm Hợp đồng thứ 6 cho đến trọn đời, giúp bạn trong những chi tiêu của mình.</li>
		                                            	<li>Nhận quyền lợi trợ cấp y tế cho mỗi ngày điều trị tại các bệnh biện của Việt Nam và nước ngoài tương đương 0,2% Số tiền bảo hiểm đến tuổi 75.</li>
		                                            	<li>Khoản bảo tức và lãi suất tính lũy hấp dẫn, giúp gia tăng khoản tiền tiết kiệm cho các kế hoạch tài chính trong tương lai.</li>
		                                            </ul>
		                                        </div>
		                                    </div>
		                                </li>
		                                <li className="item">
		                                    <div className="testimonials-inner col s12 m12 l12">
		                                    	<span><em>GIA ĐÌNH TÔI YÊU</em></span>
		                                        <img src="public/images/manulife9.png" alt="" />
		                                        <div className="testimonials-box left-align col s12 m12 l12">
		                                        	<p>Manulife - Gia Đình Tôi Yêu, một giải pháp tài chính toàn diện đáp ứng nhu cầu đa dạng, giúp hiện thực hóa những mục tiêu tài chính cho gia đình thân yêu của bạn.</p>
		                                        	<p><strong>Bảo vệ toàn diện, an tâm vui sống:</strong></p>
		                                            <ul className="bullet-style">
		                                            	<li>Đảm bảo kế hoạch tài chính của gia đình với quyền lợi bảo vệ tử vong lên đến 150 lần phí bảo hiểm đến tuổi 99</li>
		                                            	<li>Chỉ với mức phí hợp lý, bạn và gia đình hoàn toàn có thể an tâm với quyền lợi bảo vệ ưu việt của các Quyền lợi bảo hiểm tăng cường trước rủi ro tai nạn, nằm viện, bệnh lý nghiêm trọng, hay Thương tật toàn bộ và vĩnh viễn</li>
		                                            	<li>Chủ động gia tăng Số tiền bảo hiểm  mà không phải thông qua thẩm định y tế với Quyền lợi gia tăng STBH không cần thẩm định</li>
		                                            </ul>
		                                            <p><strong>Hoạch định linh hoạt, hiện thực ước mơ:</strong></p>
		                                            <ul className="bullet-style">
		                                            	<li>Linh hoạt đóng phí tùy theo nhu cầu và khả năng tài chính</li>
		                                            	<li>Chủ động lựa chọn, thay đổi Số tiền bảo hiểm phù hợp với nhu cầu trong từng giai đoạn của cuộc sống</li>
		                                            	<li>Linh hoạt sử dụng Giá trị tài khoản Hợp Đồng để trang trải cho các nhu cầu chi tiêu</li>
		                                            	<li>Linh hoạt đầu tư thêm để gia tăng quyền lợi tiết kiệm với mức lãi suất đầu tư hấp dẫn từ Quỹ liên kết chung</li>
		                                            </ul>
		                                            <p><strong>Tiết kiệm hiệu quả, đảm bảo tương lai:</strong></p>
		                                            <ul className="bullet-style">
		                                            	<li>Hưởng lãi đầu tư hấp dẫn theo tình hình đầu tư của Quỹ liên kết chung</li>
		                                            	<li>Lãi suất đầu tư đảm bảo giúp bạn hoàn toàn an tâm với các biến động của thị trường</li>
		                                            	<li>Chi phí liên quan hợp lý cùng Khoản đặc biệt duy trì hợp đồng hấp dẫn góp phần gia tăng khoản tiền tiết kiệm của bạn</li>
		                                            </ul>
		                                        </div>
		                                    </div>
		                                </li>
		                            </ul>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </section>
		);
	}
})