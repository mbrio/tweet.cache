/**
 * tweet.cache library 0.1.0
 * http://github.com/mbrio/tweet.cache
 *
 * Copyright (c) 2010 Michael Diolosa - http://github.com/mbrio
 * Dual-licensed under the GPL and MIT licenses.
(function(a){window.Mbrio={version:"0.1.0",templates:{profile:'<div><h2>${name}</h2><p><address>${address}<br />${city}, ${state} ${zip}<br /><a href="mailto:${email}">${email}</a></address></p></div>'}};a(function(){var b=a("#Page");a(Mbrio.templates.profile).render({name:"Michael Diolosa",address:"268 Euston Rd S",city:"Garden City",state:"NY",zip:"11530",email:"michael.diolosa@gmail.com"}).css("display","none").appendTo(b).fadeIn(250)})})(jQuery);
