/**
 * tweet.cache library 0.1.0
 * http://github.com/mbrio/tweet.cache
 *
 * Copyright (c) 2010 Michael Diolosa - http://github.com/mbrio
 * Dual-licensed under the GPL and MIT licenses.
 *
 * Date: Fri Sep 17 00:00:51 2010 -0400
 */
;(function($, $m, window, undefined) {
		
	var TEMPLATE_IFRAME = "<iframe src=\"{{href}}\" style=\"display:none\"></iframe>"
	
	var URL_GET_FAVORITES = 'http://api.twitter.com/1/favorites/${name}.json?include_entities=1&callback=?';
	
	var TweetCache = function(params) {
		if(!(this instanceof arguments.callee)) return new TweetCache(params);
		
		if (!$.isPlainObject(params)) params = {
			username: params
		}
		
		this.params_ = $.extend({
			username: ''
		}, params);
		
		this.url_ = URL_GET_FAVORITES.replace(/\$\{name\}/i, this.params_.username);
		this.cache = [];
	}

	TweetCache.version = '0.1.0';
	
	var link_found_ = function(text, href) {
		if(href === undefined) return;
		
		var iframe = $($m.to_html(TEMPLATE_IFRAME, {href:href}));
		iframe.load(function() {
			console.log(this.contentDocument);
		});
		
		$(document.body).prepend(iframe);
	}
	
	var favorites_success_ = function(data) {
		var results = data.results || data;
		
		var caller = this;
		$.each(results, function(i, item) {
			linkify(item.text, {
				callback: $.proxy(link_found_, caller)
			})
		});
	}
	
	var favorites_failure_ = function() {		
		this.params_.failure.apply(this, arguments);
	}

	var favorites_ = function() {
		$.ajax({
			url: this.url_,
			dataType: 'json',
			context: this,
			success: favorites_success_,
			error: favorites_failure_
		});
	}

	TweetCache.prototype.init = function() {
		favorites_.call(this);
	}

	window.TweetCache = TweetCache;

})(jQuery, Mustache, window);