var helper = require('./helper');

// The order of the arguments has no bearing on which doctor appears furthest to the left
// on the comparison page - that is determined by the order of the doctors on the results
// page (doctors towards the top will appear towards the left).
function compareBadges(name1, name2) {
  helper.addToCompare(name1);
  helper.addToCompare(name2);

  element(compare).click();
  spotBadge = element.all(findSpot).get(0);
  monmBadge = element.all(findMonm).get(0);
  fullBadge = element.all(findFull).get(0);
  multiBadge = element.all(findMulti).get(0);

  spotBadge1 = element.all(findSpot).get(1);
  monmBadge1 = element.all(findMonm).get(1);
  fullBadge1 = element.all(findFull).get(1);
  multiBadge1 = element.all(findMulti).get(1);
}

describe('badges on comparison page', function() {

	beforeEach(function() {
   	browser.get(baseUrl);
  });

    it('Participating: should have all badges (monm, full) vs (full)', function() {
  		helper.findDoctor();
  		helper.specialtySearch(monmProfession, monmCompareLocation);
  		helper.chooseFilter(anyOption);
  		compareBadges(monm, fullMonm);
			expect(spotBadge.isDisplayed()).not.toBeTruthy();
   		expect(monmBadge.isDisplayed()).toBeTruthy();
   		expect(fullBadge.isDisplayed()).toBeTruthy();
   		expect(multiBadge.isDisplayed()).not.toBeTruthy();

			expect(spotBadge1.isDisplayed()).not.toBeTruthy();
   		expect(monmBadge1.isDisplayed()).not.toBeTruthy();
   		expect(fullBadge1.isDisplayed()).toBeTruthy();
   		expect(multiBadge1.isDisplayed()).not.toBeTruthy();
  	});

  	it('Participating: should have all badges (spot, full) vs (full)', function() {
  		helper.findDoctor();
  		helper.specialtySearch(spotProfession, spotCompareLocation);
  		helper.chooseFilter(anyOption);
      helper.scroll(1);
  		compareBadges(spot, fullSpot);
			expect(spotBadge.isDisplayed()).toBeTruthy();
   		expect(monmBadge.isDisplayed()).not.toBeTruthy();
   		expect(fullBadge.isDisplayed()).toBeTruthy();
   		expect(multiBadge.isDisplayed()).not.toBeTruthy();

			expect(spotBadge1.isDisplayed()).not.toBeTruthy();
   		expect(monmBadge1.isDisplayed()).not.toBeTruthy();
   		expect(fullBadge1.isDisplayed()).toBeTruthy();
   		expect(multiBadge1.isDisplayed()).not.toBeTruthy();
  	});

	it('Participating: should have all badges (full) vs (full)', function() {
  		helper.findDoctor();
  		helper.specialtySearch(fullProfession, fullCompareLocation);
  		helper.chooseFilter(anyOption);
      helper.scroll(1);
  		compareBadges(full1, full2);
  		expect(spotBadge.isDisplayed()).not.toBeTruthy();
      expect(monmBadge.isDisplayed()).not.toBeTruthy();
      expect(fullBadge.isDisplayed()).toBeTruthy();
      expect(multiBadge.isDisplayed()).not.toBeTruthy();

  		expect(spotBadge1.isDisplayed()).not.toBeTruthy();
      expect(monmBadge1.isDisplayed()).not.toBeTruthy();
      expect(fullBadge1.isDisplayed()).toBeTruthy();
      expect(multiBadge1.isDisplayed()).not.toBeTruthy();
  });

	it('All Plans: should not have monm badge', function() {
  		helper.findDoctor();
  		helper.specialtySearch(monmProfession, monmCompareLocation);
  		helper.chooseFilter(fullOption);
      compareBadges(monm, fullMonm);
  		expect(spotBadge.isDisplayed()).not.toBeTruthy();
      expect(monmBadge.isDisplayed()).not.toBeTruthy();
      expect(fullBadge.isDisplayed()).toBeTruthy();
      expect(multiBadge.isDisplayed()).not.toBeTruthy();

  		expect(spotBadge1.isDisplayed()).not.toBeTruthy();
      expect(monmBadge1.isDisplayed()).not.toBeTruthy();
      expect(fullBadge1.isDisplayed()).toBeTruthy();
      expect(multiBadge1.isDisplayed()).not.toBeTruthy();
  	});

  	it('All Plans: should not have spot badge', function() {
  		helper.findDoctor();
  		helper.specialtySearch(spotProfession, spotCompareLocation);
  		helper.chooseFilter(fullOption);
      helper.scroll(1);
  		compareBadges(spot, fullSpot);
  		expect(spotBadge.isDisplayed()).not.toBeTruthy();
      expect(monmBadge.isDisplayed()).not.toBeTruthy();
      expect(fullBadge.isDisplayed()).toBeTruthy();
      expect(multiBadge.isDisplayed()).not.toBeTruthy();

  		expect(spotBadge1.isDisplayed()).not.toBeTruthy();
      expect(monmBadge1.isDisplayed()).not.toBeTruthy();
      expect(fullBadge1.isDisplayed()).toBeTruthy();
      expect(multiBadge1.isDisplayed()).not.toBeTruthy();
  	});

	it('All Plans: should have full badge', function() {
  		helper.findDoctor();
  		helper.specialtySearch(fullProfession, fullCompareLocation);
  		helper.chooseFilter(fullOption);
      helper.scroll(1);
  		compareBadges(full1, full2);
  		expect(spotBadge.isDisplayed()).not.toBeTruthy();
      expect(monmBadge.isDisplayed()).not.toBeTruthy();
      expect(fullBadge.isDisplayed()).toBeTruthy();
      expect(multiBadge.isDisplayed()).not.toBeTruthy();

  		expect(spotBadge1.isDisplayed()).not.toBeTruthy();
      expect(monmBadge1.isDisplayed()).not.toBeTruthy();
      expect(fullBadge1.isDisplayed()).toBeTruthy();
      expect(multiBadge1.isDisplayed()).not.toBeTruthy();
  	});

	it('Spotlight: spotlight should only have spot badge', function() {
  		helper.findDoctor();
  		helper.specialtySearch(spotProfession, spotCompareLocation);
  		helper.chooseFilter(spotOption);
      helper.scroll(1);
  		compareBadges(spot, fullSpot);
  		expect(spotBadge.isDisplayed()).toBeTruthy();
      expect(monmBadge.isDisplayed()).not.toBeTruthy();
      expect(fullBadge.isDisplayed()).not.toBeTruthy();
      expect(multiBadge.isDisplayed()).not.toBeTruthy();

  		expect(spotBadge1.isDisplayed()).not.toBeTruthy();
      expect(monmBadge1.isDisplayed()).not.toBeTruthy();
      expect(fullBadge1.isDisplayed()).toBeTruthy();
      expect(multiBadge1.isDisplayed()).not.toBeTruthy();
  });

	it('Spotlight: comparing two doctors with only full badges', function() {
  		helper.findDoctor();
  		helper.specialtySearch(fullProfession, fullCompareLocation);
  		helper.chooseFilter(spotOption);
      helper.scroll(1);
 			compareBadges(full1, full2);
 			expect(spotBadge.isDisplayed()).not.toBeTruthy();
   		expect(monmBadge.isDisplayed()).not.toBeTruthy();
   		expect(fullBadge.isDisplayed()).toBeTruthy();
   		expect(multiBadge.isDisplayed()).not.toBeTruthy();

 			expect(spotBadge1.isDisplayed()).not.toBeTruthy();
   		expect(monmBadge1.isDisplayed()).not.toBeTruthy();
   		expect(fullBadge1.isDisplayed()).toBeTruthy();
   		expect(multiBadge1.isDisplayed()).not.toBeTruthy();
  	});

	it('Spotlight: should not have monm badge', function() {
  		helper.findDoctor();
  		helper.specialtySearch(monmProfession, monmCompareLocation);
  		helper.chooseFilter(spotOption);
  		compareBadges(monm, fullMonm);
  		expect(spotBadge.isDisplayed()).not.toBeTruthy();
      expect(monmBadge.isDisplayed()).not.toBeTruthy();
      expect(fullBadge.isDisplayed()).toBeTruthy();
      expect(multiBadge.isDisplayed()).not.toBeTruthy();

  		expect(spotBadge1.isDisplayed()).not.toBeTruthy();
      expect(monmBadge1.isDisplayed()).not.toBeTruthy();
      expect(fullBadge1.isDisplayed()).toBeTruthy();
      expect(multiBadge1.isDisplayed()).not.toBeTruthy();
  	});

	it('Monmouth: should not have spot badge', function() {
  		helper.findDoctor();
  		helper.specialtySearch(spotProfession, spotCompareLocation);
  		helper.chooseFilter(monmOption);
      browser.sleep(1000);
      helper.scroll(2);
  		compareBadges(spot, fullSpot);
  		expect(spotBadge.isDisplayed()).not.toBeTruthy();
      expect(monmBadge.isDisplayed()).not.toBeTruthy();
      expect(fullBadge.isDisplayed()).toBeTruthy();
      expect(multiBadge.isDisplayed()).not.toBeTruthy();

  		expect(spotBadge1.isDisplayed()).not.toBeTruthy();
      expect(monmBadge1.isDisplayed()).not.toBeTruthy();
      expect(fullBadge1.isDisplayed()).toBeTruthy();
      expect(multiBadge1.isDisplayed()).not.toBeTruthy();
  	});

	it('Monmouth: both only full badge', function() {
  		helper.findDoctor();
  		helper.specialtySearch(fullProfession, fullCompareLocation);
  		helper.chooseFilter(monmOption);
      browser.sleep(1000);
      helper.scroll(2);
  		compareBadges(full1, full2);
  		expect(spotBadge.isDisplayed()).not.toBeTruthy();
      expect(monmBadge.isDisplayed()).not.toBeTruthy();
      expect(fullBadge.isDisplayed()).toBeTruthy();
      expect(multiBadge.isDisplayed()).not.toBeTruthy();

  		expect(spotBadge1.isDisplayed()).not.toBeTruthy();
      expect(monmBadge1.isDisplayed()).not.toBeTruthy();
      expect(fullBadge1.isDisplayed()).toBeTruthy();
      expect(multiBadge1.isDisplayed()).not.toBeTruthy();
  	});

	it('Monmouth: should only have monm badge', function() {
  		helper.findDoctor();
  		helper.specialtySearch(monmProfession, monmCompareLocation);
  		helper.chooseFilter(monmOption);
      helper.scroll(1);
  		compareBadges(monm, fullMonm);
  		expect(spotBadge.isDisplayed()).not.toBeTruthy();
      expect(monmBadge.isDisplayed()).toBeTruthy();
      expect(fullBadge.isDisplayed()).not.toBeTruthy();
      expect(multiBadge.isDisplayed()).not.toBeTruthy();

  		expect(spotBadge1.isDisplayed()).not.toBeTruthy();
      expect(monmBadge1.isDisplayed()).not.toBeTruthy();
      expect(fullBadge1.isDisplayed()).toBeTruthy();
      expect(multiBadge1.isDisplayed()).not.toBeTruthy();
  	});
});