var helper = require('./helper');

describe('facility comparison page', function() {

	beforeEach(function() {
		browser.get(baseUrl);
	});

	it('two columns should show up when two facilities are compared', function() {
  		helper.findDoctor();
		helper.findFacility();
		helper.facilitySearch(facilityType, location);
		helper.addToCompare(facility1);
		helper.addToCompare(facility2);
	  	element(compare).click();
	  	expect(element.all(by.repeater('entity in ::compare.entities')).count()).toEqual(2*docCompareRows);
	});
	it('three columns should show up when three facilities are compared', function() {
	    helper.findDoctor();
		helper.findFacility();
		helper.facilitySearch(facilityType, location);
		helper.addToCompare(facility1);
		helper.addToCompare(facility2);
		helper.addToCompare(facility3);
	    element(compare).click();
	    expect(element.all(by.repeater('entity in ::compare.entities')).count()).toEqual(3*docCompareRows);
	});
    it('four columns should show up when four facilities are compared', function() {
	    helper.findDoctor();
		helper.findFacility();
		helper.facilitySearch(facilityType, location);
		helper.addToCompare(facility1);
		helper.addToCompare(facility2);
		helper.addToCompare(facility3);
		helper.addToCompare(facility4);
	    element(compare).click();
	    expect(element.all(by.repeater('entity in ::compare.entities')).count()).toEqual(4*docCompareRows);
	});
	it('facility information should all be correct', function() {
		helper.findDoctor();
		helper.findFacility();
		helper.facilitySearch(facilityType, location);
		helper.addToCompare(facility1);
		helper.addToCompare(facility2);
		element(compare).click();
		var blocks = element.all(by.repeater('entity in ::compare.entities'));
		// The rows for providers are present, but hidden if not relevant
		expect(blocks.get(0).element(by.css('h3')).getText()).toEqual('Monmouth Ocean Hosp Service Corp');
		expect(blocks.get(0).element(by.css('h4')).getText()).toEqual('Ambulance');
		expect(blocks.get(2).isDisplayed()).not.toBeTruthy();
		expect(blocks.get(4).isDisplayed()).not.toBeTruthy();
		expect(blocks.get(6).isDisplayed()).not.toBeTruthy();
	    expect(blocks.get(8).element(by.css('span')).getText()).toEqual('None');
	    expect(blocks.get(10).element(by.css('span')).getText()).toEqual('None');
	    expect(blocks.get(12).element(by.css('ul')).getText()).toEqual('Monmouth Ocean Hospital Service Corp');
	    expect(blocks.get(14).element(findSpot).isDisplayed()).not.toBeTruthy();
	    expect(blocks.get(14).element(findMonm).isDisplayed()).not.toBeTruthy();
	    expect(blocks.get(14).element(findFull).isDisplayed()).toBeTruthy();
	    expect(blocks.get(14).element(findMulti).isDisplayed()).not.toBeTruthy();
	    expect(blocks.get(16).isDisplayed()).not.toBeTruthy();
	});
});