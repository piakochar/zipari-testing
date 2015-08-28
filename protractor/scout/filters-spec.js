var helper = require('./helper');

describe('advanced search filters', function() {
	beforeEach(function() {
   		browser.get(baseUrl);
  	});

  	it('sorting by distance should show the correct results', function() {
  		helper.findDoctor();

  		// Used a less urban area for the distance filter so the distances are larger
  		helper.specialtySearch(resultsProfession, location);
  		helper.chooseFilter(distanceFilter);
  		var results;
      helper.scroll(3);
  		results = element.all(by.repeater('entity in shownResults'));
  		expect(results.count()).toEqual(30);
  	});

  	it('sorting by language should filter results correctly', function() {
  		helper.findDoctor();
  		helper.specialtySearch(resultsProfession, resultsLocation);
  		helper.chooseFilter(language);
      var results;
      var filteredOut;
      var filtered;
      helper.scroll(1);
      results = element.all(by.repeater('entity in shownResults'));
      expect(results.count()).toEqual(15);

      filteredOut = element(by.linkText(filteredOut1));
      expect(filteredOut.isPresent()).not.toBeTruthy;

      filtered = element(by.linkText(filtered1));
      expect(filtered.isPresent()).toBeTruthy;
  	});

    it('sorting by language and gender should filter results correctly', function() {
      helper.findDoctor();
      helper.specialtySearch(resultsProfession, resultsLocation);
      helper.chooseFilter(language);
      helper.chooseFilter(gender);
      var results;
      var filteredOut;
      var filtered;
      helper.scroll(1);
      results = element.all(by.repeater('entity in shownResults'));
      expect(results.count()).toEqual(12);

      filteredOut = element(by.linkText(filteredOut2));
      expect(filteredOut.isPresent()).not.toBeTruthy;

      filtered = element(by.linkText(filtered2));
      expect(filtered.isPresent()).toBeTruthy;
    });

    it('sorting by language and medical group should filter results correctly', function() {
      helper.findDoctor();
      helper.specialtySearch(resultsProfession, resultsLocation);
      helper.chooseFilter(language);
      helper.chooseFilter(medicalGroup);
      var results;
      var filteredOut;
      var filtered;
      helper.scroll(1);
      results = element.all(by.repeater('entity in shownResults'));
      expect(results.count()).toEqual(1);

      filteredOut = element(by.linkText(filteredOut3));
      expect(filteredOut.isPresent()).not.toBeTruthy;

      filtered = element(by.linkText(filtered3));
      expect(filtered.isPresent()).toBeTruthy;
    });

    it('sorting by language and affilitated hospital should filter results correctly', function() {
      helper.findDoctor();
      helper.specialtySearch(resultsProfession, resultsLocation);
      helper.chooseFilter(language);
      helper.chooseFilter(languageHospital);
      var results;
      var filteredOut;
      var filtered;
      helper.scroll(1);
      results = element.all(by.repeater('entity in shownResults'));
      expect(results.count()).toEqual(2);

      filteredOut = element(by.linkText(filteredOut4));
      expect(filteredOut.isPresent()).not.toBeTruthy;

      filtered = element(by.linkText(filtered4));
      expect(filtered.isPresent()).toBeTruthy;
    });

    it('sorting by gender should limit choices for language filter', function() {
      helper.findDoctor();
      helper.specialtySearch(resultsProfession, resultsLocation);
      helper.chooseFilter(gender);
      expect(element(by.cssContainingText('option', language)).isPresent()).toBeTruthy();
      expect(element(by.cssContainingText('option', filteredLanguage)).isPresent()).not.toBeTruthy();
    });

    it('sorting by medical group should limit choices for affiliated hospital filter', function() {
      helper.findDoctor();
      helper.specialtySearch(resultsProfession, resultsLocation);
      expect(element(by.cssContainingText('option', affiliatedHospital)).isPresent()).toBeTruthy();
      expect(element(by.cssContainingText('option', filteredHospital)).isPresent()).toBeTruthy();
      helper.chooseFilter(filteredGroup);
      expect(element(by.cssContainingText('option', affiliatedHospital)).isPresent()).toBeTruthy();
      expect(element(by.cssContainingText('option', filteredHospital)).isPresent()).not.toBeTruthy();
    });

    it('sorting by affiliated hospital should limit choices for gender filter', function() {
      helper.findDoctor();
      helper.specialtySearch(resultsProfession, resultsLocation);
      helper.chooseFilter(filteredHospital);
      expect(element(by.cssContainingText('option', gender)).isPresent()).toBeTruthy();
      expect(element(by.cssContainingText('option', filteredGender)).isPresent()).not.toBeTruthy();
    });

    it('sorting by language should limit choices for medicalGroup filter', function() {
      helper.findDoctor();
      helper.specialtySearch(resultsProfession, resultsLocation);
      helper.chooseFilter(filteredLanguage);
      expect(element(by.cssContainingText('option', medicalGroup)).isPresent()).toBeTruthy();
      expect(element(by.cssContainingText('option', filteredGroup)).isPresent()).not.toBeTruthy();
    });

    it('resetting filters should clear all selections', function() {
      helper.findDoctor();
      helper.specialtySearch(resultsProfession, resultsLocation);
      helper.chooseFilter(language);
      helper.chooseFilter(gender);
      helper.chooseFilter(medicalGroup);
      expect(element(by.cssContainingText('option', filteredGender)).isPresent()).not.toBeTruthy();
      expect(element(by.cssContainingText('option', filteredLanguage)).isPresent()).not.toBeTruthy();
      expect(element(by.cssContainingText('option', filteredGroup)).isPresent()).not.toBeTruthy();
      expect(element(by.cssContainingText('option', filteredHospital)).isPresent()).not.toBeTruthy();
      helper.resetFilters();
      expect(element(by.cssContainingText('option', filteredGender)).isPresent()).toBeTruthy();
      expect(element(by.cssContainingText('option', filteredLanguage)).isPresent()).toBeTruthy();
      expect(element(by.cssContainingText('option', filteredGroup)).isPresent()).toBeTruthy();
      expect(element(by.cssContainingText('option', filteredHospital)).isPresent()).toBeTruthy();
    });
});
