	var TEMPLATES = {};
	var URL_GET_FAVORITES = 'http://api.twitter.com/1/favorites/${name}.json?include_entities=1&callback=?';
	
	var TweetCache = function(params) {
		if(!(this instanceof arguments.callee)) return new TweetCache(params);
		
		if (!$.isPlainObject(params)) params = {
			username: params
		}
		
		this.params_ = $.extend({
			username: '',
			success: function(){},
			failure: function(){}
		}, params);
		
		this.url_ = URL_GET_FAVORITES.replace(/\$\{name\}/i, this.params_.username);
		this.cache = [];
	}

	TweetCache.version = '@VERSION';
	
	var page_cache_success_ = function(data) {
		var results = data.results || data;
		
		this.cache.push(results);
	}
	
	var page_cache_failure_ = function() {
	}
	
	var link_found_ = function(text, href) {
		if(href === undefined) return;
		
		// look to add query value
		
		$.ajax({
			url: href,
			dataType: 'html',
			context: this,
			success: page_cache_success_,
			error: page_cache_failure_
		})
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
