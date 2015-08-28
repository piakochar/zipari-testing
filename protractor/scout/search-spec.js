var helper = require('./helper');

function findBadges() {
	
}

describe('search by NPI', function() {

	beforeEach(function() {
    	browser.get(baseUrl);
  	});

	it('searching by NPI should yield the correct doctor', function() {
		helper.findDoctor();
		helper.nameOrNpi();
		helper.searchForNpi(npi);
		element.all(by.repeater('entity in shownResults')).then(function(shownResults) {
			var result = shownResults[0].element(by.className('title'));
			expect(result.getText()).toEqual(resultsDoctor);
    	});
	});

	it('searching by NPI displays all badges', function() {
		helper.findDoctor();
		helper.nameOrNpi();
		helper.searchForNpi(npi);
		var spotBadge = element(findSpot);
      	var monmBadge = element(findMonm);
      	var fullBadge = element(findFull);
      	var multiBadge = element(findMulti);
      	expect(spotBadge.isDisplayed()).not.toBeTruthy();
      	expect(monmBadge.isDisplayed()).toBeTruthy();
      	expect(fullBadge.isDisplayed()).toBeTruthy();
      	expect(multiBadge.isDisplayed()).not.toBeTruthy();
	});
});

describe('search by name', function() {

	beforeEach(function() {
    	browser.get('providersearch/');
  	});

	it('searching by name should yield the correct doctor', function() {
		helper.findDoctor();
		helper.nameOrNpi();
		helper.searchForName(searchDoctor);
		element.all(by.repeater('entity in shownResults')).then(function(shownResults) {
			var result = shownResults[0].element(by.className('title'));
			expect(result.getText()).toEqual(resultsDoctor);
    	});
	});

	it('searching by name displays all badges', function() {
		helper.findDoctor();
		helper.nameOrNpi();
		helper.searchForName(searchDoctor);
		var spotBadge = element.all(findSpot).get(0);
      	var monmBadge = element.all(findMonm).get(0);
      	var fullBadge = element.all(findFull).get(0);
      	var multiBadge = element.all(findMulti).get(0);
      	expect(spotBadge.isDisplayed()).not.toBeTruthy();
      	expect(monmBadge.isDisplayed()).toBeTruthy();
      	expect(fullBadge.isDisplayed()).toBeTruthy();
      	expect(multiBadge.isDisplayed()).not.toBeTruthy();
	});
});