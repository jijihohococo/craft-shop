export default function (element) {
	$(element).owlCarousel({
		dots : $(element).data("dots"),
		loop : $(element).data("loop"),
		items: $(element).data("items"),
		margin: $(element).data("margin"),
		mouseDrag: $(element).data("mouse-drag"),
		touchDrag: $(element).data("touch-drag"),
		autoHeight: $(element).data("autoheight"),
		center: $(element).data("center"),
		nav: $(element).data("nav"),
		rewind: $(element).data("rewind"),
		navText: ['<i class="ion-ios-arrow-left"></i>', '<i class="ion-ios-arrow-right"></i>'],
		autoplay : $(element).data("autoplay"),
		animateIn : $(element).data("animate-in"),
		animateOut: $(element).data("animate-out"),
		autoplayTimeout : $(element).data("autoplay-timeout"),
		smartSpeed: $(element).data("smart-speed"),
		responsive: $(element).data("responsive")
	});
	console.log($(element))
}