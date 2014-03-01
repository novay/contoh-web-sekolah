jQuery(document).ready(function() { 
	// $(function(){
	"use strict";
	jQuery('form').customForm();
	jQuery('a[data-toggle]').tooltip({
		'class': 'link-tooltipe'
	});

	/* 
	 * social profiles function
	 */
	jQuery('.link-profiles').click(function(){
		jQuery(this).parent().toggleClass('active');
	});

	/* 
	 * search type function
	 */
	var search_form = jQuery('.form-search');
	var search_form_input = jQuery( search_form ).find('.field-search > input');
	jQuery( search_form_input ).keyup(function(){
		if ( jQuery( search_form_input ).val().length >= 1 ) {
			jQuery( search_form ).addClass('active');
		} else {
			jQuery( search_form ).removeClass('active');
		}
	});
	// });
});
/**
 * jQuery Custom Form min v1.0.3
 * Copyright (c) 2012 JetCoders
 * email: yuriy.shpak@jetcoders.com
 * www: JetCoders.com
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 **/
;jQuery.fn.customForm=jQuery.customForm=function(e){function r(e,t,r){e.not(".outtaHere").each(function(){var e=$(this);var t=jQuery(n.select.structure);var i=t.find(n.select.text);var s=t.find(n.select.btn);var o=t.find("."+n.disabled).hide();var u=jQuery(n.select.optStructure);var a=u.find(n.select.optList);var f="";var l;if(e.prop("disabled"))o.show();e.find("option").each(function(){var t=jQuery(this);if(t.val()==e.val()){i.html(t.html());f+='<li data-value="'+t.val()+'" class="selected"><a href="#">'+t.html()+"</a></li>"}else f+='<li data-value="'+t.val()+'"><a href="#">'+t.html()+"</a></li>"});a.append(f).find("a").click(function(){a.find("li").removeClass("selected");jQuery(this).parent().addClass("selected");e.val(jQuery(this).parent().attr("data-value"));i.html(jQuery(this).html());e.change();t.removeClass(n.hoverClass);u.hide();return false});t.width(e.outerWidth());t.insertBefore(e);t.addClass(e.attr("class"));u.css({width:e.outerWidth(),display:"none",position:"absolute"});u.addClass(e.attr("class"));jQuery(document.body).append(u);t.hover(function(){if(l)clearTimeout(l)},function(){l=setTimeout(function(){t.removeClass(n.hoverClass);u.hide()},200)});u.hover(function(){if(l)clearTimeout(l)},function(){l=setTimeout(function(){t.removeClass(n.hoverClass);u.hide()},200)});s.click(function(){if(u.is(":visible")){t.removeClass(n.hoverClass);u.hide()}else{t.addClass(n.hoverClass);u.children("ul").css({height:"auto",overflow:"hidden"});e.removeClass("outtaHere");u.css({width:e.outerWidth()});e.addClass("outtaHere");u.css({top:t.offset().top+t.outerHeight(),left:t.offset().left,display:"block"});t.focus();if(n.select.maxHeight&&u.children("ul").height()>n.select.maxHeight)u.children("ul").css({height:n.select.maxHeight,overflow:"auto"})}return false});r.click(function(){setTimeout(function(){e.find("option").each(function(t){var n=jQuery(this);if(n.val()==e.val()){i.html(n.html());a.find("li").removeClass("selected");a.find("li").eq(t).addClass("selected")}})},10)});e.change(function(){if(u.is(":hidden")){e.find("option").each(function(t){var n=jQuery(this);if(n.val()==e.val()){i.html(n.html());a.find("li").removeClass("selected");a.find("li").eq(t).addClass("selected")}})}});$(window).resize(function(){e.removeClass("outtaHere");t.width(Math.floor(e.outerWidth()));e.addClass("outtaHere")})}).addClass("outtaHere")}function i(e,t,r){e.each(function(){var e=$(this);this._label=$("label[for="+e.attr("id")+"]").length?$("label[for="+e.attr("id")+"]"):e.parents("label");if(!e.hasClass("outtaHere")&&e.is(":radio")){var t=jQuery(n.radio.structure);t.addClass(e.attr("class"));this._replaced=t;if(e.is(":disabled")){t.addClass(n.disabled);if(e.is(":checked"))t.addClass("disabledChecked")}else if(e.is(":checked")){t.addClass(n.radio.checked);this._label.addClass("checked")}else{t.addClass(n.radio.defaultArea);this._label.removeClass("checked")}t.click(function(){if(jQuery(this).hasClass(n.radio.defaultArea)){e.change();e.prop("checked",true);s(e.get(0))}});r.click(function(){setTimeout(function(){if(e.is(":checked"))t.removeClass(n.radio.defaultArea+" "+n.radio.checked).addClass(n.radio.checked);else t.removeClass(n.radio.defaultArea+" "+n.radio.checked).addClass(n.radio.defaultArea)},10)});e.click(function(){s(this)});t.insertBefore(e);e.addClass("outtaHere")}})}function s(e){jQuery('input:radio[name="'+jQuery(e).attr("name")+'"]').not(e).each(function(){if(this._replaced&&!jQuery(this).is(":disabled")){this._replaced.removeClass(n.radio.defaultArea+" "+n.radio.checked).addClass(n.radio.defaultArea);this._label.removeClass("checked")}});e._replaced.removeClass(n.radio.defaultArea+" "+n.radio.checked).addClass(n.radio.checked);e._label.addClass("checked");jQuery(e).trigger("change")}function o(e,t,r){e.each(function(){var e=$(this);this._label=$("label[for="+e.attr("id")+"]").length?$("label[for="+e.attr("id")+"]"):e.parents("label");if(!e.hasClass("outtaHere")&&e.is(":checkbox")){var t=jQuery(n.checkbox.structure);t.addClass(e.attr("class"));this._replaced=t;if(e.is(":disabled")){t.addClass(n.disabled);if(e.is(":checked"))t.addClass("disabledChecked")}else if(e.is(":checked")){t.addClass(n.checkbox.checked);this._label.addClass("checked")}else{t.addClass(n.checkbox.defaultArea);this._label.removeClass("checked")}t.click(function(){if(!t.hasClass("disabled")&&!t.parents("label").length){if(e.is(":checked"))e.prop("checked",false);else e.prop("checked",true);u(e)}});r.click(function(){setTimeout(function(){u(e)},10)});e.click(function(){u(e)});t.insertBefore(e);e.addClass("outtaHere");t.parents("label").click(function(){if(!t.hasClass("disabled")){if(e.is(":checked"))e.prop("checked",false);else e.prop("checked",true);u(e)}return false})}})}function u(e){if(e.is(":checked")){e.get(0)._replaced.removeClass(n.checkbox.defaultArea+" "+n.checkbox.checked).addClass(n.checkbox.checked);e.get(0)._label.addClass("checked")}else{e.get(0)._replaced.removeClass(n.checkbox.defaultArea+" "+n.checkbox.checked).addClass(n.checkbox.defaultArea);e.get(0)._label.removeClass("checked")}e.trigger("change")}var t=this;if(typeof t=="function")t=$(document);var n=jQuery.extend(true,{select:{elements:"select.customSelect",structure:'<div class="selectArea"><a href="#" class="selectButton"><span class="center"></span><span class="right"> </span></a><div class="disabled"></div></div>',text:".center",btn:".selectButton",optStructure:'<div class="selectOptions"><ul></ul></div>',maxHeight:false,optList:"ul"},radio:{elements:"input.customRadio",structure:"<div></div>",defaultArea:"radioArea",checked:"radioAreaChecked"},checkbox:{elements:"input.customCheckbox",structure:"<div></div>",defaultArea:"checkboxArea",checked:"checkboxAreaChecked"},disabled:"disabled",hoverClass:"hover"},e);return t.each(function(){var e=jQuery(this);var t=jQuery();if(this!==document)t=e.find("input:reset, button[type=reset]");r(e.find(n.select.elements),e,t);i(e.find(n.radio.elements),e,t);o(e.find(n.checkbox.elements),e,t)})};

