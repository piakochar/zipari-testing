var helper = require('./helper');

function doctorElement(name) {
  var doctor = element(by.linkText(name));
  var card = doctor.element(by.xpath('..')).element(by.xpath('..'));
  spotBadge = card.element(findSpot);
  monmBadge = card.element(findMonm);
  fullBadge = card.element(findFull);
  multiBadge = card.element(findMulti);
}

describe('badge filter in search', function() {

  beforeEach(function() {
    browser.get(baseUrl);
  });

  it('Participating: should have all badges (full, spot) on results page', function() {
    helper.findDoctor();
    helper.specialtySearch(spotField, spotLocation);
    helper.chooseFilter(anyOption);
    helper.scroll(1);
    doctorElement(spotDoctor);
    expect(spotBadge.isDisplayed()).toBeTruthy();
    expect(monmBadge.isDisplayed()).not.toBeTruthy();
    expect(fullBadge.isDisplayed()).toBeTruthy();
    expect(multiBadge.isDisplayed()).not.toBeTruthy();
  });

  it('Participating: should have all badges (full) on results page', function() {
    helper.findDoctor();
    helper.specialtySearch(fullField, fullLocation);
    helper.chooseFilter(anyOption);
    doctorElement(fullDoctor);
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).not.toBeTruthy();
    expect(fullBadge.isDisplayed()).toBeTruthy();
    expect(multiBadge.isDisplayed()).not.toBeTruthy();
  });

  it('Participating: should have all badges (full, monm) on results page', function() {
    helper.findDoctor();
    helper.specialtySearch(monmField, monmLocation);
    helper.chooseFilter(anyOption);
    helper.scroll(1);
    doctorElement(monmDoctor)
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).toBeTruthy();
    expect(fullBadge.isDisplayed()).toBeTruthy();
    expect(multiBadge.isDisplayed()).not.toBeTruthy();
  });

  it('Participating: should have all badges (multi) on results page', function() {
    helper.findDoctor();
    helper.specialtySearch(multiField, multiLocation);
    helper.chooseFilter(anyOption);
    helper.chooseFilter(language);
    doctorElement(multiDoctor);
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).not.toBeTruthy();
    expect(fullBadge.isDisplayed()).not.toBeTruthy();
    expect(multiBadge.isDisplayed()).toBeTruthy();
  });

  it('All Plans: should not have spot badge on results page', function() {
    helper.findDoctor();
    helper.specialtySearch(spotField, spotLocation);
    helper.chooseFilter(fullOption);
    helper.scroll(1);
    doctorElement(spotDoctor);
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).not.toBeTruthy();
    expect(fullBadge.isDisplayed()).toBeTruthy();
    expect(multiBadge.isDisplayed()).not.toBeTruthy();
  });

  it('All Plans: should not have monm badge on results page', function() {
    helper.findDoctor();
    helper.specialtySearch(monmField, monmLocation);
    helper.chooseFilter(fullOption);
    helper.scroll(1);
    doctorElement(monmDoctor);
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).not.toBeTruthy();
    expect(fullBadge.isDisplayed()).toBeTruthy();
    expect(multiBadge.isDisplayed()).not.toBeTruthy();
  });

  it('All Plans: should have full badge on results page', function() {
    helper.findDoctor();
    helper.specialtySearch(fullField, fullLocation);
    helper.chooseFilter(fullOption);
    doctorElement(fullDoctor);
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).not.toBeTruthy();
    expect(fullBadge.isDisplayed()).toBeTruthy();
    expect(multiBadge.isDisplayed()).not.toBeTruthy();
  });

  it('All Plans: should have multi badge on results page', function() {
    helper.findDoctor();
    helper.specialtySearch(multiField, multiLocation);
    helper.chooseFilter(fullOption);
    helper.chooseFilter(language);
    helper.scroll(1);
    doctorElement(multiDoctor);
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).not.toBeTruthy();
    expect(fullBadge.isDisplayed()).not.toBeTruthy();
    expect(multiBadge.isDisplayed()).toBeTruthy();
  });

  it('Spotlight: should only have spot badge on results page', function() {
    helper.findDoctor();
    helper.specialtySearch(spotField, spotLocation);
    helper.chooseFilter(spotOption);
    doctorElement(spotDoctor);
    expect(spotBadge.isDisplayed()).toBeTruthy();
    expect(monmBadge.isDisplayed()).not.toBeTruthy();
    expect(fullBadge.isDisplayed()).not.toBeTruthy();
    expect(multiBadge.isDisplayed()).not.toBeTruthy();
  });

  it('Spotlight: should have multi badge on results page', function() {
    helper.findDoctor();
    helper.specialtySearch(multiField, multiLocation);
    helper.chooseFilter(spotOption);
    helper.chooseFilter(language);
    doctorElement(multiDoctor);
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).not.toBeTruthy();
    expect(fullBadge.isDisplayed()).not.toBeTruthy();
    expect(multiBadge.isDisplayed()).toBeTruthy();
  });

  it('Monmouth: should only have Monmouth badge on results page', function() {
    helper.findDoctor();
    helper.specialtySearch(monmField, monmLocation);
    helper.chooseFilter(monmOption);
    doctorElement(monmDoctor);
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).toBeTruthy();
    expect(fullBadge.isDisplayed()).not.toBeTruthy();
    expect(multiBadge.isDisplayed()).not.toBeTruthy();
  });

  it('Monmouth: should have multi badge on results page', function() {
    helper.findDoctor();
    helper.specialtySearch(multiField, multiLocation);
    helper.chooseFilter(monmOption);
    helper.chooseFilter(language);
    doctorElement(multiDoctor);
    expect(spotBadge.isDisplayed()).not.toBeTruthy();
    expect(monmBadge.isDisplayed()).not.toBeTruthy();
    expect(fullBadge.isDisplayed()).not.toBeTruthy();
    expect(multiBadge.isDisplayed()).toBeTruthy();
  });
});