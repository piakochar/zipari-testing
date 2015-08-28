var helper = require('./helper');

describe('hovering over badges shows the correct pop-ups', function() {

	beforeEach(function() {
		var ptor = protractor.getInstance();
    	browser.get(baseUrl);
  	});

	it('hovering over full should show QualCare', function() {
		helper.findDoctor();
  		helper.specialtySearch(resultsProfession, resultsLocation);
  		var card = helper.findDoctorCard(doctor1);
  		var badge = card.element(by.className('tool'));
  		// browser.actions().mouseMove(badge).perform();
  		ptor.actions().mouseMove(ptor.findElement(protractor.B.className('tool'))).perform();
  		// browser.pause();
  		expect(badge.element(by.css('h4')).isDisplayed()).toBeTruthy();
	});
	// it('hovering over spot should show QualCare Spotlight badge', function() {
	// 	spotField
	// 	spotLocation
	// });
	// it('hovering over monm should show CentraState badge', function() {
	// 	monmField
	// 	monmLocation
	// });
	// it('hovering over multi should show PHCS', function() {
	// 	resultsProfession
	// 	resultsLocation
	// 	language
	// 	Zoran Lasic, MD
	// });
});