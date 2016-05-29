var React = require('react');
var Preloader = require('./Preloader');
var Nav = require('./Nav');
var ContactModal = require('./ContactModal');
var Section0 = require('./Section0');
var Section1 = require('./Section1');
var Section2 = require('./Section2');
var Section3 = require('./Section3');
var Section4 = require('./Section4');
var Section5 = require('./Section5');
var Section6 = require('./Section6');


module.exports = React.createClass({
	componentDidMount: function(){
		$('.btn-link,.nav-wrapper .main-nav li a,.nav-wrapper .side-nav li a').smoothScroll({offset: -50, speed: 900});

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
				<Section5 />
				<Section0 />
				<Section3 />
				<Section6 />
				<Section4 />
				<ContactModal />
			</div>
		);
	}
});