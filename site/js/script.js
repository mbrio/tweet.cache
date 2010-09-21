/**
 * tweet.cache library 0.1.0
 * http://github.com/mbrio/tweet.cache
 *
 * Copyright (c) 2010 Michael Diolosa - http://github.com/mbrio
 * Dual-licensed under the GPL and MIT licenses.
 *
 * Date: Fri Sep 17 00:00:51 2010 -0400
 */
(function(b,f,g,h){var c=function(a){if(!(this instanceof arguments.callee))return new c(a);b.isPlainObject(a)||(a={username:a});this.params_=b.extend({username:""},a);this.url_="http://api.twitter.com/1/favorites/${name}.json?include_entities=1&callback=?".replace(/\$\{name\}/i,this.params_.username);this.cache=[]};c.version="0.1.0";var i=function(a,d){if(d!==h){var e=b(f.to_html('<iframe src="{{href}}" style="display:none"></iframe>',{href:d}));e.load(function(){console.log(this.contentDocument)});
b(document.body).prepend(e)}},k=function(a){var d=this;b.each(a.results||a,function(e,j){linkify(j.text,{callback:b.proxy(i,d)})})},l=function(){this.params_.failure.apply(this,arguments)};c.prototype.init=function(){b.ajax({url:this.url_,dataType:"json",context:this,success:k,error:l})};g.TweetCache=c})(jQuery,Mustache,window);
