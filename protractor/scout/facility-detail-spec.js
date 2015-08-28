describe('facility detail page', function() {
	beforeEach(function() {
		browser.get(facility);
	});
	it('should show name of facility', function() {
		var nameSection = element(by.className('elements-lead'));
		var name = nameSection.element(by.css('h1'));
		expect(name.getText()).toEqual('Robert Wood Johnson University Hospital');
	});
	it('should show NPI of facility', function() {
		var npi = element(by.binding('::detailedResult.entity.npi'));
		expect(npi.getText()).toEqual('NPI: 1346243375');
	});
	it('should show specialties of facility', function() {
		var specialties = element(by.binding('::detailedResult.entity.primary_specialty'));
		expect(specialties.getText()).toEqual('Hospital');	
	});
	it('should show medical groups facility is part of', function() {
		var medicalGroups = element.all(by.repeater('medical_group in ::detailedResult.entity.medical_groups'));
		expect(medicalGroups.count()).toEqual(1);
		expect(medicalGroups.get(0).getText()).toEqual('Robert Wood Johnson University Hospital');
	});
	it('should show names of affiliated doctors', function() {
		var affiliatedDoctors = element.all(by.repeater('entity in detailedResult.shownProviders'));
		expect(affiliatedDoctors.count()).toEqual(10);
		element(by.buttonText("Show More Doctors")).click();
		expect(affiliatedDoctors.count()).toEqual(20);
	});
	it('should show all badges for the facility', function() {
		var spotBadge = element(findSpot);
      	var monmBadge = element(findMonm);
      	var fullBadge = element(findFull);
      	var multiBadge = element(findMulti);
      	expect(spotBadge.isDisplayed()).not.toBeTruthy();
      	expect(monmBadge.isDisplayed()).not.toBeTruthy();
      	expect(fullBadge.isDisplayed()).toBeTruthy();
      	expect(multiBadge.isDisplayed()).not.toBeTruthy();
	});
	it('should primary location of facility', function() {
		var primaryLocation = element.all(by.repeater('address in ::detailedResult.entity.addresses'));
		expect(primaryLocation.get(0).getText()).toEqual('One Robert Wood Johnson Place\nNew Brunswick, NJ 08901' + 
			'\nClick for Phone number\n\n(Wheelchair Accessible)\nGet Directions');
	});
	it('should show affiliated hospitals', function() {
		var affiliatedHospitals = element.all(by.repeater('entity in ::detailedResult.entity.hospital_affiliations'));
		expect(affiliatedHospitals.get(0).getText()).toEqual('Umdnj Rwj Emergency Physicians');
	});
});