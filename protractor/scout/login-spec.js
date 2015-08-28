var helper = require('./helper');

function goToDoctorPage(name) {
	browser.driver.findElement(by.linkText(name)).click();
	spotBadge = element(findSpot);
	monmBadge = element(findMonm);
	fullBadge = element(findFull);
	multiBadge = element(findMulti);
}

describe('members', function() {

    beforeAll(function() {
      browser.get(baseUrl);
      helper.searchAsMember();
      // helper.findDoctor();

      // Log in
      browser.sleep(2000);
      browser.ignoreSynchronization = true;
      helper.logIn(testUser, testPass);
      browser.ignoreSynchronization = false;
      browser.sleep(2000);
    });

    it('Search for a primary care provider', function() {
      helper.primarySearch(primaryField, primaryLocation);
      expect(primaryFilter.isSelected()).toBeTruthy();
    });

    it('Search for PCP field with specialty option selected', function() {
      helper.specialtySearch(pcpField, pcpLocation);
      expect(primaryFilter.isSelected()).not.toBeTruthy();
      expect(element(by.linkText(nonPcpDoc)).isPresent()).toBeTruthy();
      goToDoctorPage(pcpDoctor);
      expect(primaryCare.isDisplayed()).toBeTruthy();
    });

    it('Basic functionality should work in a specialty test', function() {
   	  helper.specialtySearch(fullField, fullLocation);
	    helper.chooseFilter(anyOption);
	    goToDoctorPage(fullDoctor);
      expect(spotBadge.isDisplayed()).not.toBeTruthy();
      expect(monmBadge.isDisplayed()).not.toBeTruthy();
      expect(fullBadge.isDisplayed()).toBeTruthy();
      expect(multiBadge.isDisplayed()).not.toBeTruthy();
      browser.sleep(2000);

      // Add favorite
      helper.favFromDetails();
      helper.favoritesPage();

      // Email page
      emailResults.click();
      expect(from.getAttribute('value')).toEqual(testEmail);
      element(by.className('close-dialog')).click();
    });

    it('Compare Specialty Doctors', function() {
      helper.specialtySearch(resultsProfession, resultsLocation);
      helper.addToCompare(doctor1);
      helper.addToCompare(doctor2);
      helper.addToCompare(doctor3);
      helper.addToCompare(doctor4);
      browser.sleep(5000);
      element(compare).click();
      expect(element.all(by.repeater('entity in ::compare.entities')).count()).toEqual(4*docCompareRows);
      var doctor = element(by.cssContainingText('td', doctor1));
      browser.sleep(7000);
      doctor.element(by.cssContainingText('a', 'View more details')).click();
    });

    it('Facility Search', function() {
      helper.findFacility();
      helper.facilitySearch(facilityType, location);
      browser.sleep(2000);
      console.log('This is the URL: ' + browser.getCurrentUrl());
      browser.driver.findElement(by.linkText(facility1)).click();
    });

    afterAll(function() {
      // Log out
      browser.sleep(4000);
      console.log('This is the URL: ' + browser.getCurrentUrl());
      helper.logOut();
    });
});