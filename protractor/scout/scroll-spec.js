var helper = require('./helper');

describe('should scroll to include all search results', function() {
	beforeEach(function() {
		browser.get(baseUrl);
	});

	it('scroll down results page', function() {
		helper.findDoctor();
		helper.specialtySearch(resultsProfession, resultsLocation);
		var results = element.all(by.repeater('entity in shownResults'));
		var numResults = 8;
		expect(results.count()).toEqual(numResults);

		for(var i = 0; i < 11; i++) {
			// Click on an arbitrary element on the page, so that the scroll capability will work

			browser.executeScript('window.scrollTo(0, document.body.scrollHeight)').then(function() {
				results = element.all(by.repeater('entity in shownResults'));
				numResults+=9;
				if (numResults > 100) {
					numResults = 100; // A max of 100 results are allowed on the page
				}
				expect(results.count()).toEqual(numResults);
			});
		}
	});
});