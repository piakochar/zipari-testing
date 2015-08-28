var helper = require('./helper');

exports.config = {
  onPrepare: function() {
  	/**
  	 * Member Login
  	 */
  	global.testUser;
  	global.testPass = 'Abcd1234';
  	global.testEmail;

  	/**
	 * Doctor Details Page:
	 * The following sections contain URLs of the details pages
	 * of doctors with the attributes named in the corresponding variables outlined
	 * below. These variables define the various pieces of information a doctor details
	 * page is able to have. One doctor may have one or more of these attributes, but
	 * there should be exactly one doctor listed for each of the variables defined.
	 */
	global.baseUrl = 'providersearch/';
	global.languages = helper.buildUrl('135185', 'doctor');
	global.medicalGroups = helper.buildUrl('135185', 'doctor');
	global.specialties = helper.buildUrl('119522', 'doctor');
	global.hospitalAffiliations = helper.buildUrl('119522', 'doctor');
	global.npiUrl = helper.buildUrl('119522', 'doctor');
	global.primarySpecialty = helper.buildUrl('119522', 'doctor');
	global.education = helper.buildUrl('113919', 'doctor');
	global.address = helper.buildUrl('113919', 'doctor');

	/**
	 * Facility Details Page:
	 * The facility currently used for testing has all of the following attributes, so
	 * replacing it would need to involve choosing a facility that fulfills all of these categories
	 * or several that collectively do so.s
	 */
	global.facility = helper.buildUrl('26226', 'facility');

	/**
	 * Search Fields:
	 * The following variables represesnt the different text buffers and buttons required to search
	 * for doctors and facilities on the start page
	 */
	// The field in which a user can type a desired provider speciality
	global.desiredSpecialty = element(by.css('[ng-options="specialty for specialty in PROVIDER_SPECIALTIES"]'));
	// The field in which a user can type a desired facility specialty
	global.desiredFacility = element(by.css('[ng-options="specialty for specialty in FACILITY_SPECIALTIES"]'));
	// The field in which a user can type a desired location
	global.desiredLocation = element(by.model('searchParams.location'));
	// The button a user needs to press to begin the search
	global.searchButton = element(by.css('[class="cta active"]'));
	// The field in which a user can type a doctor NPI or name to search by
	global.desiredDoctor = element(by.model('searchParams.nameOrNpi'));
	// The field in which a user can type a desired primary care field
	global.desiredPrimary = element(by.model('searchParams.pcp'));

	/**
	 * Variables that will hold the elements corresponding to each of the badges on various pages
	 */
	global.spotBadge;
	global.monmBadge;
	global.fullBadge;
	global.multiBadge;

	// A second set of variables used for testing the compare feature
	global.spotBadge1;
	global.monmBadge1;
	global.fullBadge1;
	global.multiBadge1;

	// Describe how to find each badge on any given page or within another element
	global.findSpot = by.className('si-spotlight');
	global.findMonm = by.className('si-monmouth');
	global.findFull = by.className('si-full');
	global.findMulti = by.className('si-multi');

	// Choices on the drop-down search menu
	global.anyOption = 'Participating Doctors'
	global.fullOption = 'Participates in All Plans';
	global.spotOption = 'Spotlight Preferred Provider';
	global.monmOption = 'Monmouth County/CentraState Preferred Provider';

	/**
	 * Primary Care Doctors:
	 */

	global.pcpBox = element(by.id('pcp-box'));

	global.primaryField = 'Family Practice';
	global.primaryLocation = 'West Long Branch, NJ, United States';
	global.primaryFilter = element(by.css('[ng-change="updateFilterResults(\'pcp\')"]'));

	// criteria for PCP field in location with both
	global.pcpDoctor = 'Robert D Murphy, MD';
	global.nonPcpDoc = 'Margaret C Fisher, MD';
	global.pcpField = 'Pediatrics';
	global.pcpLocation = 'West Long Branch, NJ, United States';
	global.primaryCare = element(by.cssContainingText('h2', 'Primary Care Physician'));

	/**
	 * Badge Doctors:
	 * The following doctors each have a certain combination of badges, and their hometowns and
	 * specialties are saved along with thier names.
	 */
	// This person has a spotlight badge and a full badge
	global.spotDoctor = 'Renuka Verma, MD';
	global.spotField = 'Pediatrics';
	global.spotLocation = 'West Long Branch, NJ, United States';

	// This person has a full badge
	global.fullDoctor = 'Robert D Murphy, MD';
	global.fullField = 'Pediatrics';
	global.fullLocation = 'West Long Branch, NJ, United States';

	// This person has a monmouth badge and a full badge
	global.monmDoctor = 'Sangeeta Garg, MD';
	global.monmField = 'Cardiology';
	global.monmLocation = 'Freehold, NJ, United States';

	// This person has a multi badge
	global.multiDoctor = 'Howard L Levitt, MD';
	global.multiField = 'Cardiology';
	global.multiLocation = 'Manhattan, New York, NY, United States';

	
	/**
	 * Comparison:
	 * The following doctors are used to test the compare feature. Location and profession information
	 * is also stored to make it possible to search for them.
	 */
	global.location = 'Shrewsbury Township, NJ, United States';

	global.docCompareRows = 9;
	global.compare = by.className('compare-cta'); // How to find the comparison button on a page
	global.removeFromCompare = by.className('glyphicon-remove');
	global.toCompare = element.all(by.repeater('entity in compare.entities'));
	global.compareError = by.css('[ng-show="compareError"]');
	global.compareQueue = element(by.className('compare-wrapper'));

	// The following variables are used to compare doctors
	global.monmCompareLocation = 'Freehold, NJ, United States';
	global.monmProfession = 'Cardiology';
	global.monm = 'Sangeeta Garg, MD';              // Has a monm and a full badge
	global.fullMonm = 'Liana M Spano-Brennan, DO';  // Appears on same results page as monm, 
													// but has only full badge
	
	global.spotCompareLocation = 'West Long Branch, NJ, United States';
	global.spotProfession = 'Pediatrics';
	global.spot = 'Renuka Verma, MD';			    // Has a spot and a full badge
	global.fullSpot = 'Robert D Murphy, MD';	    // Appears on same results page as spot, 
													// but has only full badge 

	global.fullCompareLocation = 'West Long Branch, NJ, United States';
	global.fullProfession = 'Pediatrics';
	global.full1 = 'Robert D Murphy, MD';	        // Has only a full badge
	global.full2 = 'Margaret C Fisher, MD';			// Appears on same results page as full1,
													// and also has only a full badge

	// The following variables are used to compare facilities
	global.facilityType = 'Ambulance Services';
	global.facility1 = 'Maximum Care Ambulance, Inc';
	global.facility2 = 'Monmouth Ocean Hosp Service Corp';
	global.facility3 = 'Able Medical Transportation';
	global.facility4 = 'Med-x Medical Services, Llc';

	/**
	 * Search Doctors:
	 * The following doctor their corresponding NPI are used to test the site's capability to search
	 * for a specific doctor using either a name or an NPI.
	 */
	global.npi = '1407906282';
	global.searchDoctor = 'Philip L Case';
	global.resultsDoctor = 'Philip L Case, MD';

	/**
	 * Results Page Tests:
	 * The following variables are used to search for an arbitrary page of results on which a variety 
	 * of tests are executed. These tests include the comparison feature and the infinite scroll.
	 */
	global.resultsProfession = 'Cardiology';
	global.resultsLocation = 'Manhattan, New York, NY, United States';
	global.doctor1 = 'Jonathan S Steinberg, MD';
	global.doctor2 = 'Suneet Mittal, MD';
	global.doctor3 = 'Dan L Musat, MD';
	global.doctor4 = 'Howard Weinstein, MD';
	global.doctor5 = 'Nancy Roistacher, MD';

	/**
	 * Favorites:
	 * Varaibles for testing how to add a doctor as a favorite. The same resultsProfession and 
	 * resultsLocation are used for this testing.
	 */
	global.favoriteError = by.css('[ng-show="favoriteError"]');

	/**
	 * Email Results:
	 * Testing whether the functionality for emailing a set of results works correctly.
	 */
	global.emailResults = element(by.className('email-btn'));
	global.submissionPage = element(by.id('zps-ef'));

	global.from = element(by.id('zps-rf-from'));
	global.to = element(by.className('email-to'));

	global.invalidEmail = 'hello';
	global.validEmail = 'pia@zipari.com';

	global.fromError = element(by.css('[ng-show="fromError"]'));
	global.toError = element(by.css('[ng-show="toError"]'));

	global.sendEmail = element(by.linkText('Email Results'));
	global.closeForm = element(by.className('close-dialog'));
	
	// Options for who to send the results to
	global.myself = 'Myself';
	global.other = 'Other';

	/**
	 * Other Search Filters:
	 * Testing whether the search filters other than the badges work correctly.
	 */
	global.distanceFilter = '5 miles';

	// If any of the filters is chosen, the other filters get limited as well, eliminating the choices that are 
	// irrelevant for the search results, so the following variables are to check that when a certain filter is
	// used, the choices availible for the others are also limited accordingly. They are also used to test
	// whether the correct doctors are left out of the search when filters are applied.
	global.language = 'Hebrew';
	global.languageHospital = 'Jamaica Hospital';
	global.filteredOut1 = 'Suneet Mittal, MD'; // Not in search results when above language filter applied
	global.filtered1 = 'Yaron Bareket, MD';    // Remains in results when above filter is applied
	
	global.gender = 'Male';
	global.filteredOut2 = 'Dvorah G Holtzman, MD';
	global.filtered2 = 'Yaron Bareket, MD';

	global.medicalGroup = 'University Medical Practice Assoc';
	global.filteredOut3 = 'Yaron Bareket, MD';
	global.filtered3 = 'Alan Rozanski, MD';

	global.affiliatedHospital = 'New York Downtown Hospital';
	global.filteredOut4 = 'Muhammad Z Iqbal, MD';
	global.filtered4 = 'William I Frumkin, MD';

	global.filteredLanguage = 'Afrikaans';
	global.filteredGender = 'Female';
	global.filteredHospital = 'Winthrop University Hospital';
	global.filteredGroup = 'Concorde Medical Group';

	/*
	 * Badge Filters:
	 *
	 * The following variables are used to test the new badge filter logic implemented around
	 * July 20, 2015. This new logic includes searching the database afresh whenever a filter
	 * is chosen rather than simply filtering the results already on the client side, like the
	 * other filters do.
	 */
	global.badgeField = 'Internal Medicine';
	global.badgeLocation = 'Newark, NJ, United States';

	// a doctor with the correct plan but outside the specified radius
	global.excludedResult = 'Carl J Renner, MD'
  },

  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['search-spec.js'],
  // specs: ['badge-compare-spec.js', 'badge-detail-spec.js', 'badge-spec.js', 'compare-spec.js', 'detail-spec.js', 'email-spec.js', 
  // 'facility-compare-spec.js', 'facility-detail-spec.js', 'filters-spec.js', 'scroll-spec.js', 'search-spec.js', 
  // 'primary-care-spec.js', 'badge-filter-spec.js'],
  rootElement: '#zp-scout',
  framework: 'jasmine2',
  // baseUrl: 'https://limiteduat:uat@newjersey-uat.healthrepublic.us/',
  // baseUrl: 'http://django2-newjersey.healthrepublic.prod.fuwt.net/',
  baseUrl: 'http://newjersey.healthrepublic.prod.fuwt.net/',
  multiCapabilities: [
    {browserName: 'chrome'},
    // {browserName: 'chrome'},
    // {browserName: 'chrome'},

    /**
     * TO RUN LOGIN-SPEC: 
     *    1) Uncomment the desired number of browsers from the following section
     *    2) Comment out the above specs section and the above browserName sections
     *       (in multiCapabilities)
     *    3) Make sure the baseUrl is set to UAT
     */
    // {browserName: 'chrome',
  	 // specs: ['test35.js', 'login-spec.js']},
    // {browserName: 'chrome',
  	 // specs: ['test36.js', 'login-spec.js']},
    // {browserName: 'chrome',
  	 // specs: ['test37.js', 'login-spec.js']},
    // {browserName: 'chrome',
  	 // specs: ['test38.js', 'login-spec.js']},
    // {browserName: 'chrome',
  	 // specs: ['test42.js', 'login-spec.js']},
  ],
  allScriptsTimeout: 60000,

  jasmineNodeOpts: {defaultTimeoutInterval: 1000 * 120}
};