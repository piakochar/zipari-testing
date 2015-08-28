var helper = require('./helper');

describe('adding a favorite doctor', function() {

	beforeEach(function() {
    	browser.get(baseUrl);
  	});

// Doesn't work because the badge does not display for long enough
	// it('should show error message when not logged in', function() {
	// 	helper.findDoctor();
	// 	helper.search(resultsProfession, resultsLocation);
	// 	var doctor = helper.findDoctorCard(doctor1);
	// 	var errorBanner = doctor.element(favoriteError);
	// 	doctor.element(by.className('favorite')).click();
	// 	expect(errorBanner.isDisplayed()).toBeTruthy();
	// });

});