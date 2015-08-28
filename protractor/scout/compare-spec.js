var helper = require('./helper');

function removeDoctor(placeInList) {
	var doctor = toCompare.get(placeInList);
	doctor.element(removeFromCompare).click();
}

describe('comparison page', function() {
	beforeEach(function() {
   	browser.get(baseUrl);
  });

  it('doctor added to compare queue should be there', function() {
    helper.findDoctor();
    helper.specialtySearch(resultsProfession, resultsLocation);
    helper.addToCompare(doctor1);
    expect(compareQueue.element(by.cssContainingText('li', doctor1)).isPresent()).toBeTruthy();
  });
  it('compare button should not show up with only one doctor in queue', function() {
  	helper.findDoctor();
  	helper.specialtySearch(resultsProfession, resultsLocation);
  	helper.addToCompare(doctor1);
  	expect(toCompare.count()).toEqual(1);
  	expect(element(compare).isDisplayed()).not.toBeTruthy();
  });
  it('clicking compare again should remove doctor from queue', function() {
  	helper.findDoctor();
  	helper.specialtySearch(resultsProfession, resultsLocation);
  	helper.addToCompare(doctor1);
  	helper.addToCompare(doctor1);
  	expect(toCompare.count()).toEqual(0);
  });
  it('clicking the x next to a name should decrease number of people in the queue', function() {
  	helper.findDoctor();
  	helper.specialtySearch(resultsProfession, resultsLocation);
  	helper.addToCompare(doctor1);
  	helper.addToCompare(doctor2);
  	helper.addToCompare(doctor3);
  	removeDoctor(0);
  	expect(toCompare.count()).toEqual(2);
  });
  it('clicking the x next to a name should remove the correct person', function() {
    helper.findDoctor();
    helper.specialtySearch(resultsProfession, resultsLocation);
    helper.addToCompare(doctor1);
    helper.addToCompare(doctor2);
    helper.addToCompare(doctor3);
    removeDoctor(0);
    expect(compareQueue.element(by.cssContainingText('li', doctor1)).isPresent()).not.toBeTruthy();
    expect(compareQueue.element(by.cssContainingText('li', doctor2)).isPresent()).toBeTruthy();
    expect(compareQueue.element(by.cssContainingText('li', doctor3)).isPresent()).toBeTruthy();
  });
	
  // // Protractor doesn't register the fact that the error message shows up because it goes away too quickly

  // it('should show error if more than 4 doctors are added to queue', function() {
  // 	helper.findDoctor();
  // 	helper.specialtySearch(resultsProfession, resultsLocation);
  // 	helper.addToCompare(doctor1);
  // 	helper.addToCompare(doctor2);
  // 	helper.addToCompare(doctor3);
  // 	helper.addToCompare(doctor4);
  // 	var doctor = helper.findDoctorCard(doctor4);
  // 	var errorBanner = doctor.element(compareError);
  // 	expect(errorBanner.isDisplayed()).not.toBeTruthy();
  // 	doctor = helper.findDoctorCard(doctor5);
  // 	errorBanner = doctor.element(compareError);
  // 	// browser.ignoreSynchronization = true;
  // 	helper.addToCompare(doctor5);
  // 	expect(errorBanner.isDisplayed()).toBeTruthy();
  // 	// browser.ignoreSynchronization = false;
  // });

  it('two columns should show up when two people are compared', function() {
  	helper.findDoctor();
  	helper.specialtySearch(resultsProfession, resultsLocation);
  	helper.addToCompare(doctor1);
  	helper.addToCompare(doctor2);
  	element(compare).click();
  	expect(element.all(by.repeater('entity in ::compare.entities')).count()).toEqual(2*docCompareRows);
  });
	it('three columns should show up when three people are compared', function() {
    helper.findDoctor();
    helper.specialtySearch(resultsProfession, resultsLocation);
    helper.addToCompare(doctor1);
    helper.addToCompare(doctor2);
    helper.addToCompare(doctor3);
    element(compare).click();
    expect(element.all(by.repeater('entity in ::compare.entities')).count()).toEqual(3*docCompareRows);
  });
  it('four columns should show up when four people are compared', function() {
    helper.findDoctor();
    helper.specialtySearch(resultsProfession, resultsLocation);
    helper.addToCompare(doctor1);
    helper.addToCompare(doctor2);
    helper.addToCompare(doctor3);
    helper.addToCompare(doctor4);
    element(compare).click();
    expect(element.all(by.repeater('entity in ::compare.entities')).count()).toEqual(4*docCompareRows);
  });
  it('doctor information should all be correct', function() {
    helper.findDoctor();
    helper.specialtySearch(resultsProfession, resultsLocation);
    helper.addToCompare(doctor1);
    helper.addToCompare(doctor2);
    element(compare).click();
    var blocks = element.all(by.repeater('entity in ::compare.entities'));
    expect(blocks.get(0).element(by.css('h3')).getText()).toEqual('Jonathan S Steinberg, MD');
    expect(blocks.get(0).element(by.css('h4')).getText()).toEqual('Cardiology');
    expect(blocks.get(2).element(by.css('span')).isDisplayed()).not.toBeTruthy();
    expect(blocks.get(4).element(by.css('span')).isDisplayed()).toBeTruthy();
    expect(blocks.get(6).element(by.css('span')).getText()).toEqual('Mount Sinai School of Medicine, 1980');
    expect(blocks.get(8).getText()).toEqual('Additional Specialties\nInternal Medicine\nCardiovascular Diseases\n' 
      + 'Cardiac Electrophysiology');
    expect(blocks.get(10).getText()).toEqual('Affiliated Hospitals\nGood Samaritan Hospital\nRichmond University ' 
      + 'Medical Center\nMount Sinai St Lukes - Mount Sinai Roosevelt\nValley Hospital, The');
    expect(blocks.get(12).getText()).toEqual('Medical Groups\nUniversity Medical Practice Assoc\nValley Physician Services Ny, Pc');
    expect(blocks.get(14).element(findSpot).isDisplayed()).not.toBeTruthy();
    expect(blocks.get(14).element(findMonm).isDisplayed()).not.toBeTruthy();
    expect(blocks.get(14).element(findFull).isDisplayed()).toBeTruthy();
    expect(blocks.get(14).element(findMulti).isDisplayed()).not.toBeTruthy();
    expect(blocks.get(16).element(by.css('span')).getText()).toEqual('');
  });
});
