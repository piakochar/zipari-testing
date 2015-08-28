var helper = require('./helper');

describe('Primary Care Provider search', function() {

	beforeEach(function() {
    	browser.get(baseUrl);
  	});

  	it('should show box with PCP fields', function() {
  		helper.findDoctor();
  		expect(pcpBox.isPresent()).toBeTruthy();
  	});
});