/**
 * tweet.cache library 0.1.0
 * http://github.com/mbrio/tweet.cache
 *
 * Copyright (c) 2010 Michael Diolosa - http://github.com/mbrio
 * Dual-licensed under the GPL and MIT licenses.
 *
 * Date: Thu Sep 16 22:13:51 2010 -0400
 */
(function(b,e,f){var c=function(a){if(!(this instanceof arguments.callee))return new c(a);b.isPlainObject(a)||(a={username:a});this.params_=b.extend({username:"",success:function(){},failure:function(){}},a);this.url_="http://api.twitter.com/1/favorites/${name}.json?include_entities=1&callback=?".replace(/\$\{name\}/i,this.params_.username);this.cache=[]};c.version="0.1.0";var g=function(a){this.cache.push(a.results||a)},h=function(){},i=function(a,d){d!==f&&b.ajax({url:d,dataType:"html",context:this,
success:g,error:h})},k=function(a){var d=this;b.each(a.results||a,function(m,j){linkify(j.text,{callback:b.proxy(i,d)})})},l=function(){this.params_.failure.apply(this,arguments)};c.prototype.init=function(){b.ajax({url:this.url_,dataType:"json",context:this,success:k,error:l})};e.TweetCache=c})(jQuery,window);
