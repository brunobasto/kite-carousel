'use strict';

import core from 'bower:metal/src/core';
import dom from 'bower:metal/src/dom/dom';
import CarouselBase from './Carousel.soy.js';
import Anim from 'bower:metal-anim/src/Anim';
import EventHandler from 'bower:metal/src/events/EventHandler';
import 'bower:metal/src/dom/events';

/**
 * Carousel component.
 */
class Carousel extends CarouselBase {
	/**
	 * Navigates to the desired slide.
	 */
	navigate(index) {
		this.selectedIndex = index;
	}

	/**
	 * Shows next slide.
	 */
	next() {
		this.selectedIndex = Math.min(this.selectedIndex + 1, this.items.length - 1);
	}

	/**
	 * Shows previous slide.
	 */
	prev() {
		this.selectedIndex = Math.max(0, this.selectedIndex - 1);
	}

	_onClickIndicator(event) {
		let index,
			items = this.element.querySelectorAll('.carousel-indicators > li');

		for (index = 0; index < items.length; index++) {
			if (items[index] === event.delegateTarget) {
				break;
			}
		}

		this.navigate(index);
	}
}

/**
 * Default carousel elementClasses.
 * @default carousel
 * @type {string}
 * @static
 */
Carousel.ELEMENT_CLASSES = 'carousel';

/**
 * Carousel attributes definition.
 * @type {Array}
 * @static
 */
Carousel.ATTRS = {
	/**
	 * The height of the carousel.
	 * @type {Number}
	 */
	height: {
		validator: core.isString,
		value: 'auto'
	},

	/**
	 * The items shown on the carousel.
	 * @type {Array}
	 */
	items: {
		validator: core.isArray,
		value: [
			{
				body: 'Kites in great shape and close to you!',
				headline: 'Kiteboarding Kites',
				src: 'http://shop.watersportswest.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/o/contra_action.jpg'
			},
			{
				body: 'Find the best equipement in bars and lines.',
				headline: 'Bars and Lines',
				src: 'http://www.thekiteboarder.com/wordpress/wp-content/uploads/2015/01/CABRINHA-CONTRA-BAR-2015-GEAR-REVIEW-04.jpg'
			}
		]
	},

	/**
	 * The currently selected index.
	 * @type {Number}
	 */
	selectedIndex: {
		validator: core.isNumber,
		value: 0
	}
};

CarouselBase.setImpl(Carousel);

export default Carousel;