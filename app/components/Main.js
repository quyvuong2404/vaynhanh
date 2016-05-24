var React = require('react');
var Preloader = require('./Preloader');
var Nav = require('./Nav');
var Body = require('./Body');

module.exports = React.createClass({
	componentDidMount: function(){
		var ModalEffects = (function () {

	        function init() {

	            [].slice.call(document.querySelectorAll('.md-trigger')).forEach(function (el, i) {
	                var modal = document.querySelector('#' + el.getAttribute('data-modal')),
	                        close = modal.querySelector('.md-close');

	                function removeModal(hasPerspective) {
	                    classie.remove(modal, 'md-show');
	                    if (hasPerspective) {
	                        classie.remove(document.documentElement, 'md-perspective');
	                    }
	                }

	                function removeModalHandler() {
	                    removeModal(classie.has(el, 'md-setperspective'));
	                }

	                $(el).on('click', function () {
	                    classie.add(modal, 'md-show');
	                    if (classie.has(el, 'md-setperspective')) {
	                        setTimeout(function () {
	                            classie.add(document.documentElement, 'md-perspective');
	                        }, 25);
	                    }
	                });

	                $(close).on('click', function (ev) {
	                    ev.stopPropagation();
	                    removeModalHandler();
	                });

	            });
	        }

	        return {init: init};

	    })();

	    $(function () {
	        ModalEffects.init();
	    });
	},

	render: function(){
		return (
			<div>
				<Preloader />
				<Nav />
				<Body />
				<div className="md-modal md-effect-1 valign-wrapper" id="m-contact">
		            <div className="md-content z-depth-2">
		                <h3>Đăng Ký Vay Vốn</h3>
		                <a className="md-close"><i className="ion-android-close"></i></a>
		                <div className="row">
		                    <form id="contactForm" className="col s12">
		                        <div className="row">
		                            <div className="input-field col s12">
		                                <input id="last_name" name="fullname" type="text" />
		                                <label for="last_name">Last Name</label>
		                            </div>
		                            <div className="input-field col s12">
		                                <input id="email" name="email" type="email" />
		                                <label for="email">Email</label>
		                            </div>
		                            <div className="input-field col s12">
		                                <textarea id="textarea" name="message" className="materialize-textarea"></textarea>
		                                <label for="textarea">Textarea</label>
		                            </div>
		                            <div className="input-field col s12">
		                                <input className="waves-effect waves-light btn red center" type="submit" value="Gửi" />
		                            </div>
		                        </div>
		                    </form>
		                </div>
		            </div>
		        </div>
			</div>
		);
	}
});