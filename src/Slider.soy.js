/* jshint ignore:start */
import Component from 'bower:metal/src/component/Component';
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyAop from 'bower:metal/src/soy/SoyAop';
import SoyRenderer from 'bower:metal/src/soy/SoyRenderer';
import SoyTemplates from 'bower:metal/src/soy/SoyTemplates';
var Templates = SoyTemplates.get();
// This file was automatically generated from Slider.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.Slider.
 */

if (typeof Templates.Slider == 'undefined') { Templates.Slider = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Slider.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="carousel slide" data-ride="carousel">' + Templates.Slider.indicators(opt_data, null, opt_ijData) + Templates.Slider.items(opt_data, null, opt_ijData) + Templates.Slider.controls(opt_data, null, opt_ijData) + '</div>');
};
if (goog.DEBUG) {
  Templates.Slider.content.soyTemplateName = 'Templates.Slider.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Slider.controls = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<a class="left carousel-control" href="javascript:;" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="javascript:;" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a>');
};
if (goog.DEBUG) {
  Templates.Slider.controls.soyTemplateName = 'Templates.Slider.controls';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Slider.indicators = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<ol class="carousel-indicators">';
  var itemList14 = opt_data.items;
  var itemListLen14 = itemList14.length;
  for (var itemIndex14 = 0; itemIndex14 < itemListLen14; itemIndex14++) {
    var itemData14 = itemList14[itemIndex14];
    output += '<li ' + ((itemIndex14 == 0) ? 'class="active"' : '') + ' data-slide-to="' + soy.$$escapeHtmlAttribute(itemIndex14) + '"></li>';
  }
  output += '</ul>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Slider.indicators.soyTemplateName = 'Templates.Slider.indicators';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Slider.items = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div class="carousel-inner" role="listbox">';
  var itemList26 = opt_data.items;
  var itemListLen26 = itemList26.length;
  for (var itemIndex26 = 0; itemIndex26 < itemListLen26; itemIndex26++) {
    var itemData26 = itemList26[itemIndex26];
    output += '<div class="item ' + ((itemIndex26 == 0) ? 'active' : '') + '"><img src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData26.src)) + '" alt="' + soy.$$escapeHtmlAttribute(itemData26.title) + '"><div class="container"><div class="carousel-caption"><h1>' + soy.$$escapeHtml(itemData26.headline) + '</h1><p>' + soy.$$escapeHtml(itemData26.body) + '</p></div></div></div>';
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Slider.items.soyTemplateName = 'Templates.Slider.items';
}

Templates.Slider.content.params = ["id","items"];
Templates.Slider.controls.params = [];
Templates.Slider.indicators.params = ["items"];
Templates.Slider.items.params = ["items"];

class Slider extends Component {
  static setImpl(ctor) {
    ComponentRegistry.register(ctor, 'Slider');
  }
}
Slider.RENDERER = SoyRenderer;
Slider.setImpl(Slider);
SoyAop.registerTemplates('Slider');
export default Slider;
/* jshint ignore:end */
