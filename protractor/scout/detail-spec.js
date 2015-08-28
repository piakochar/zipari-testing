describe('doctor detail page', function() {
  it('should show name of doctor', function() {
    browser.get(languages);
    var displayName = element(by.binding('::detailedResult.entity.display_name'));
    expect(displayName.getText()).toEqual('Nabeel M Najib, MD');
  });
  it('should show languages', function() {
    browser.get(languages);
    var language = element.all(by.repeater('language in ::detailedResult.entity.languages'));
    expect(language.count()).toEqual(3);
    expect(language.get(0).getText()).toEqual('Arabic');
    expect(language.get(1).getText()).toEqual('Spanish');
  });
  it('should show medical groups', function() {
    browser.get(medicalGroups);
    var groups = element.all(by.repeater('medical_group in ::detailedResult.entity.medical_groups'));
    expect(groups.get(0).getText()).toEqual('Hudson Pediatrics');
  });
  it('should show specialties', function() {
    browser.get(specialties);
    var specialtiesList = element.all(by.repeater('specialty in ::detailedResult.entity.specialties'));
    expect(specialtiesList.get(0).getText()).toEqual('Allergy/ Immunology');
  });
  it('should show affiliated hospitals', function() {
    browser.get(hospitalAffiliations);
    var hospitals = element.all(by.repeater('entity in ::detailedResult.entity.hospital_affiliations'));
    expect(hospitals.get(0).getText()).toEqual('Valley Hospital, The');
    expect(hospitals.get(1).getText()).toEqual('Hoboken University Medical Center');
  });
  it('should show NPI', function() {
    browser.get(npiUrl);
    var id = element(by.binding('::detailedResult.entity.npi'));
    expect(id.getText()).toEqual('NPI: 1437205929');
  });
  it('should show primary specialty', function() {
    browser.get(primarySpecialty);
    var specialty = element(by.binding('::detailedResult.entity.primary_specialty'));
    expect(specialty.getText()).toEqual("Allergy/ Immunology");
  });
  it('should show education', function() {
    browser.get(education);
    var schools = element(by.binding('::detailedResult.entity.medical_school'));
    expect(schools.getText()).toEqual("Hunter School of Social Work, 2002");
  });
  it('should show primary location', function() {
    browser.get(address);
    var locations = element.all(by.repeater('address in ::detailedResult.entity.addresses'));
    expect(locations.get(0).getText()).toEqual('410 Halsey Street, Suite 1\nBrooklyn, NY 11233\n' 
      + 'Click for Phone number\n\n\nGet Directions');
  });
});