	window.Mbrio = {
		version: '@VERSION',
		templates: {
			profile: '<div><h2>${name}</h2><p><address>${address}<br />${city}, ${state} ${zip}<br /><a href="mailto:${email}">${email}</a></address></p></div>'
		}
	};
	
	$(function() {
		var page = $("#Page");
		var profileModel = {
			name: 'Michael Diolosa',
			address: '268 Euston Rd S',
			city: 'Garden City',
			state: 'NY',
			zip: '11530',
			email: 'michael.diolosa@gmail.com'
		}
		
		var profileModel2 = {
			name: 'Michael Diolosa',
			address: '195 Bowery',
			city: 'New York',
			state: 'NY',
			zip: '10002',
			email: 'michael.diolosa@deepend.com'
		}
		
		var profile = $(Mbrio.templates.profile).render(profileModel).css('display', 'none').appendTo(page);
		profile.fadeIn(250);
	});