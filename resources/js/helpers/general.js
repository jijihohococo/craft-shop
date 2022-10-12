
import { userLang } from '../store.js';
import LazyLoad from 'vanilla-lazyload'
export function thousandSeprator(x){
     return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function translate(data) {
	var file=require('../lang/'+userLang.data+'/data.json')
	return file[data]
}

export function horizontalImageCache(){
	var lazyLoadInstances = [];

			var initOneLazyLoad = function (horizContainerElement) {
  // When the .horizContainer element enters the viewport,
  // instantiate a new LazyLoad on the horizContainerElement
  var oneLL = new LazyLoad({
  	container: horizContainerElement
  });
  // Optionally push it in the lazyLoadInstances
  // array to keep track of the instances
  lazyLoadInstances.push(oneLL);
};

// The "lazyLazy" instance of lazyload is used to check
// when the .horizContainer divs enter the viewport
var lazyLazy = new LazyLoad({
	elements_selector: ".horizContainer",
	callback_enter: initOneLazyLoad,
  unobserve_entered: true // Stop observing .horizContainer(s) after they entered
});
}