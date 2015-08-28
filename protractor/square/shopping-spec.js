describe('shopping process', function() {

	beforeEach(function() {
    	browser.get(shopBaseUrl);
  	});

  	it('should move through all steps smoothly', function() {
  		expect(element(by.id('personal-information')).isPresent()).toBeTruthy();
  		zipField.sendKeys(shopZip);
  		toCover.click();
  		dobField.sendKeys(shopDob);
  		firstContinue.click();

  		var medicalPlans = element.all(by.repeater('plan in plans.products | matchGroup: group | matchPlanType: planType | validPlans | metalOrder'));
  		var medicalPlan = medicalPlans.get(0).element(by.className('select-plan-btn'));
  		medicalPlan.click();

  		var visionPlans = element.all(by.repeater('plan in plans.products | matchGroup: group | matchPlanType: planType | validPlans | metalOrder'));
  		var visionPlan = visionPlans.get(0).element(by.className('select-plan-btn'));
  		visionPlan.click();

  		browser.sleep(2000);
  	});
});