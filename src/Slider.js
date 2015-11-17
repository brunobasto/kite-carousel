'use strict';

import core from 'bower:metal/src/core';
import dom from 'bower:metal/src/dom/dom';
import SliderBase from './Slider.soy.js';
import Anim from 'bower:metal-anim/src/Anim';
import EventHandler from 'bower:metal/src/events/EventHandler';
import 'bower:metal/src/dom/events';

/**
 * Slider component.
 */
class Slider extends SliderBase {
	constructor(opt_config) {
		super(opt_config);
		this.eventHandler_ = new EventHandler();
	}

	/**
	 * @inheritDoc
	 */
	detached() {
		super.detached();
		this.eventHandler_.removeAllListeners();
		clearTimeout(this.delay_);
	}

	/**
	 * Closes the alert, disposing it once the animation ends.
	 */
	close() {
		dom.once(this.element, 'animationend', this.dispose.bind(this));
		dom.once(this.element, 'transitionend', this.dispose.bind(this));
		this.eventHandler_.removeAllListeners();
		this.syncVisible(false);
	}

	/**
	 * Handles document click in order to close the alert.
	 * @param {!Event} event
	 * @protected
	 */
	handleDocClick_(event) {
		if (!this.element.contains(event.target)) {
			this.hide();
		}
	}

	/**
	 * Hide the alert.
	 */
	hide() {
		this.visible = false;
	}

	/**
	 * Toggles the visibility of the alert.
	 */
	toggle() {
		this.visible = !this.visible;
	}
}

/**
 * Default alert elementClasses.
 * @default alert
 * @type {string}
 * @static
 */
Slider.ELEMENT_CLASSES = 'carousel';

/**
 * Slider attributes definition.
 * @type {!Object}
 * @static
 */
Slider.ATTRS = {
	/**
	 * The CSS classes that should be added to the alert when being shown/hidden.
	 * @type {!Object}
	 */
	items: {
		validator: core.isArray,
		value: [
			{
				body: 'test',
				headline: 'Item',
				src: 'http://www.freelargeimages.com/wp-content/uploads/2014/12/Landscape_01.jpg',
				title: 'Sample item'
			},
			{
				body: 'test',
				headline: 'Item',
				src: 'http://www.freelargeimages.com/wp-content/uploads/2014/12/Landscape_01.jpg',
				title: 'Sample item'
			}
		]
	}
};

SliderBase.setImpl(Slider);

export default Slider;