var helper = require('./helper');

function goToDoctorPage(name) {
	browser.driver.findElement(by.linkText(name)).click();
	spotBadge = element(findSpot);
	monmBadge = element(findMonm);
	fullBadge = element(findFull);
	multiBadge = element(findMulti);
}

describe('badges on details page', function() {

	beforeEach(function() {
    	browser.get(baseUrl);
  	});

	it('Participating: all badges (full) on details page', function() {
		helper.findDoctor();
	  helper.specialtySearch(fullField, fullLocation);
	  helper.chooseFilter(anyOption);
	  goToDoctorPage(fullDoctor);
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).not.toBeTruthy();
    expect(fullBadge.isDisplayed()).toBeTruthy();
    expect(multiBadge.isDisplayed()).not.toBeTruthy(); 
	});

	it('Participating: all badges (full, spot) on details page', function() {
		helper.findDoctor();
		helper.specialtySearch(spotField, spotLocation);
		helper.chooseFilter(anyOption);
    helper.scroll(2);
		goToDoctorPage(spotDoctor);
    expect(spotBadge.isDisplayed()).toBeTruthy();
    expect(monmBadge.isDisplayed()).not.toBeTruthy();
    expect(fullBadge.isDisplayed()).toBeTruthy();
    expect(multiBadge.isDisplayed()).not.toBeTruthy();
	});

  it('Participating: all badges (full, monm) on details page', function() {
    helper.findDoctor();
    helper.specialtySearch(monmField, monmLocation);
    helper.chooseFilter(anyOption);
    helper.scroll(1);
  	goToDoctorPage(monmDoctor);
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).toBeTruthy();
    expect(fullBadge.isDisplayed()).toBeTruthy();
    expect(multiBadge.isDisplayed()).not.toBeTruthy();
  });

  it('Participating: all badges (mutli) on details page', function() {
    helper.findDoctor();
    helper.specialtySearch(multiField, multiLocation);
    helper.chooseFilter(anyOption);
    helper.chooseFilter(language);
    goToDoctorPage(multiDoctor);
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).not.toBeTruthy();
    expect(fullBadge.isDisplayed()).not.toBeTruthy();
    expect(multiBadge.isDisplayed()).toBeTruthy(); 
  });

	it('All plans: spot does not show on details page', function() {
		helper.findDoctor();
		helper.specialtySearch(spotField, spotLocation);
		helper.chooseFilter(fullOption);
  	helper.scroll(1);
		goToDoctorPage(spotDoctor);
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).not.toBeTruthy();
    expect(fullBadge.isDisplayed()).toBeTruthy();
    expect(multiBadge.isDisplayed()).not.toBeTruthy();
	});

	it('All Plans: full shows on details page', function() {
		helper.findDoctor();
		helper.specialtySearch(fullField, fullLocation);
    browser.sleep(2000);
		helper.chooseFilter(fullOption);
    browser.sleep(2000);
		goToDoctorPage(fullDoctor);
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).not.toBeTruthy();
    expect(fullBadge.isDisplayed()).toBeTruthy();
    expect(multiBadge.isDisplayed()).not.toBeTruthy();
	});

  it('All Plans: should not have monm badge on details page', function() {
    helper.findDoctor();
    helper.specialtySearch(monmField, monmLocation);
    browser.sleep(2000);
    helper.chooseFilter(fullOption);
    browser.sleep(2000);
    helper.scroll(1);
    goToDoctorPage(monmDoctor);
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).not.toBeTruthy();
    expect(fullBadge.isDisplayed()).toBeTruthy();
    expect(multiBadge.isDisplayed()).not.toBeTruthy();
  });

  it('All Plans: multi shows on details page', function() {
    helper.findDoctor();
    helper.specialtySearch(multiField, multiLocation);
    helper.chooseFilter(anyOption);
    helper.chooseFilter(language);
    goToDoctorPage(multiDoctor);
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).not.toBeTruthy();
    expect(fullBadge.isDisplayed()).not.toBeTruthy();
    expect(multiBadge.isDisplayed()).toBeTruthy(); 
  });

	it('Spotlight: only spot on details page', function() {
		helper.findDoctor();
		helper.specialtySearch(spotField, spotLocation);
		helper.chooseFilter(spotOption);
    browser.sleep(2000);
		goToDoctorPage(spotDoctor);
    expect(spotBadge.isDisplayed()).toBeTruthy();
    expect(monmBadge.isDisplayed()).not.toBeTruthy();
    expect(fullBadge.isDisplayed()).not.toBeTruthy();
    expect(multiBadge.isDisplayed()).not.toBeTruthy();
	});

	it('Monmouth: only monm on details page', function() {
		helper.findDoctor();
		helper.specialtySearch(monmField, monmLocation);
    browser.sleep(2000);
		helper.chooseFilter(monmOption);
    browser.sleep(2000);
		goToDoctorPage(monmDoctor);
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).toBeTruthy();
    expect(fullBadge.isDisplayed()).not.toBeTruthy();
    expect(multiBadge.isDisplayed()).not.toBeTruthy(); 
	});

  it('Monmouth: only monm on details page', function() {
    helper.findDoctor();
    helper.specialtySearch(monmField, monmLocation);
    browser.sleep(2000);
    helper.chooseFilter(monmOption);
    browser.sleep(2000);
    goToDoctorPage(monmDoctor);
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).toBeTruthy();
    expect(fullBadge.isDisplayed()).not.toBeTruthy();
    expect(multiBadge.isDisplayed()).not.toBeTruthy();
  });
});
