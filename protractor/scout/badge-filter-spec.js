var helper = require('./helper');

describe('Badge filter logic', function() {

	beforeEach(function() {
    	browser.get(baseUrl);
  	});

  	it('should choose 10 mile radius when badge filter is chosen directly after search', function() {
  		helper.findDoctor();
  		helper.primarySearch(badgeField, badgeLocation);
  		helper.chooseFilter('Participates in All Plans');
  		expect(element(by.model('filters.distance')).$('option:checked').getText()).toEqual('10 miles');

  	});

  	it('should choose 10 mile radius when badge filter is changed after distance has been changed', function() {
  		helper.findDoctor();
  		helper.primarySearch(badgeField, badgeLocation);
  		helper.chooseFilter(fullOption);
  		helper.chooseFilter(spotOption);
  		helper.chooseFilter('25 miles');
  		helper.chooseFilter(fullOption);
  		expect(element(by.model('filters.distance')).$('option:checked').getText()).toEqual('25 miles');
  	});

  	it('should work correclty with distance filters so that no doctors outside of radius show up', function() {
  		helper.findDoctor();
  		helper.primarySearch(badgeField, badgeLocation);
  		helper.chooseFilter(spotOption);

  		// scroll down to the place where full plan doctors start showing up, because
  		// due to the way the content is surfaced, protractor won't detect entries
  		// that are lower on the page until the user scrolls down to reveal them
      helper.scroll(6);
  		
  		filteredOut = element(by.linkText(excludedResult));
  		expect(filteredOut.isPresent()).not.toBeTruthy;
  	});

  	it('should work correclty with distance filters so that doctors inside radius show up', function() {
  		helper.findDoctor();
  		helper.primarySearch(badgeField, badgeLocation);
  		helper.chooseFilter(spotOption);
  		helper.chooseFilter('15 miles');
      helper.scroll(6);
  		filteredOut = element(by.linkText(excludedResult));
  		expect(filteredOut.isPresent()).toBeTruthy;
  	});
});