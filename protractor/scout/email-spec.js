var helper = require('./helper');

describe('email search results', function() {
	beforeEach(function() {
    	browser.get(baseUrl);
  	});

  	it('submission page shows up when button is pressed', function() {
  		helper.findDoctor();
  		helper.specialtySearch(resultsProfession, resultsLocation);
  		emailResults.click();
  		expect(element(by.id('zps-ef')).isDisplayed()).toBeTruthy();
  	});

  	it('should display error when invalid email is entered', function() {
  		helper.findDoctor();
  		helper.specialtySearch(resultsProfession, resultsLocation);
  		emailResults.click();
  		from.sendKeys(invalidEmail);
  		helper.sendEmail();
  		expect(fromError.isDisplayed()).toBeTruthy();
  	});

  	it('should display second field when other is selected', function() {
  		helper.findDoctor();
  		helper.specialtySearch(resultsProfession, resultsLocation);
  		emailResults.click();
      element(by.cssContainingText('option', other)).click();
      var otherEmail = element(by.className('email-to'));
      expect(otherEmail.isDisplayed()).toBeTruthy();
  	});

    it('should display error when second invalid email is entered', function() {
      helper.findDoctor();
      helper.specialtySearch(resultsProfession, resultsLocation);
      emailResults.click();
      from.sendKeys(validEmail);
      element(by.cssContainingText('option', other)).click();
      to.sendKeys(invalidEmail);
      helper.sendEmail();
      expect(toError.isDisplayed()).toBeTruthy();
    });

    it('information remains if email has not been sent', function() {
      helper.findDoctor();
      helper.specialtySearch(resultsProfession, resultsLocation);
      emailResults.click();
      from.sendKeys(validEmail);
      element(by.cssContainingText('option', other)).click();
      to.sendKeys(invalidEmail);
      closeForm.click();
      emailResults.click();
      expect(from.getAttribute('value')).toEqual(validEmail);
      expect(to.getAttribute('value')).toEqual(invalidEmail);
    });
});