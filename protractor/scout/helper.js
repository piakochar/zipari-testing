module.exports = {

	/**
	 * Constructs the correct URL for a details page
	 * @param {int} id
	 *		provider id (not NPI)
	 * @param {string} type
	 * 		specifies whether the details page is for a doctor or facility
	 * @return {string}
	 *		the requested URL
	 */
	buildUrl: function(id, type) {
		var url = baseUrl + 'details/' + type + '/?identifier=' + id;
		console.log(url);
		return url;
	},

	/**
	 * Searches for a primary care provider
	 * @param {string} primaryField
	 * 		the primary care field to search for
	 * @param {string} location
	 * 		the location to search for (not optional in this function)
	 */
	primarySearch: function(primaryField, location) {
		desiredPrimary.sendKeys(primaryField);
		desiredLocation.clear();
		desiredLocation.sendKeys(location);
		searchButton.click();
		browser.sleep(2000);
	},

	/**
	 * Searches for a specialty doctor
	 * @param {string} specialty
	 * 		the specialty field to search for
	 * @param {string} location
	 * 		the location to search for (not optional in this function)
	 */
	specialtySearch: function(specialty, location) {
		element(by.css('[ng-click="setSearchField(\'specialty\')"]')).click();
		desiredSpecialty.sendKeys(specialty);
  		browser.sleep(2000);
  		desiredLocation.clear();
  		desiredLocation.sendKeys(location);
  		browser.sleep(2000);
  		searchButton.click();
  		browser.sleep(2000);		
	},

	/**
	 * Searches for a facility by specialty
	 * @param {string}
	 * 		the specialty field to search for 
	 * @param {string}
	 * 		the location to search for (not optional for this function)
	 */
	facilitySearch: function(specialty, location) {
		desiredFacility.sendKeys(specialty);
		desiredLocation.clear();
		desiredLocation.sendKeys(location);
		searchButton.click();
		browser.sleep(2000);
	},

	/**
	 * From the gateway page, chooses to search as a non-member
	 */
	findDoctor: function() {
		var notMember = element(by.css('[keys="config.ZAPI.EVENT.Find_a_Doctor_Non_Member"]'));
  		notMember.click();		
	},

	/**
	 * From the gateway page, chooses to search as a member
	 */
	searchAsMember: function() {
		var isMember = element(by.css('[href="/user/login/?next=/providersearch"]'));
		isMember.click();
	},

	/**
	 * Log in as a member
	 */
	logIn: function(user, pass) {
		var username = element(by.id('id_username'));
		var password = element(by.id('id_password'));
		var submit = element(by.id('login_submit'));
		console.log('This is the URL: ' + browser.getCurrentUrl());
		browser.sleep(2000);
		username.sendKeys(user);
		password.sendKeys(pass);
		console.log('This is the URL: ' + browser.getCurrentUrl());
		browser.sleep(4000);
		submit.click();
	},

	/**
	 * Log out
	 */
	logOut: function() {
		var menu = element(by.className('welcome'));
		var logout = menu.element(by.cssContainingText('a', 'Logout'));
		console.log('This is the URL: ' + browser.getCurrentUrl());
		menu.click();
		logout.click();
	},

	/**
	 * Chooses a filter once on a search results page
	 * @param {string} choice
	 * 		the string representing the choice to select from a dropdown menu
	 *		(this function assumes that there are no duplicate choices across any of
	 * 		 the dropdown menus on a page)
	 */
	chooseFilter: function(choice) {
		browser.sleep(2000);
		element(by.cssContainingText('option', choice)).click();
	},

	/**
	 * Searches for a specific doctor's card on a search results page
	 * @param {string} name
	 * 		the name of the doctor to find
	 * @return {element}
	 * 		the element corresponding to the requested doctor's card 
	 */
	findDoctorCard: function(name) {
		var doctor = element(by.linkText(name));
		return doctor.element(by.xpath('..')).element(by.xpath('..'));
	},

	/**
	 * Simulates a user choosing to search for a doctor by Name or NPI, by selecting that
	 * type of search
	 */
	nameOrNpi: function() {
		element(by.css('[ng-click="setSearchField(\'nameOrNpi\')"]')).click();
	},

	/**
	 * Searches for a doctor by NPI number once the Name/NPI search option has been selected
	 * @param {number} number
	 * 		the desired NPI to search for
	 */
	searchForNpi: function(number) {
		desiredDoctor.sendKeys(number);
		searchButton.click();
	},

	/**
	 * Searches for a doctor by name once the Name/NPI search option has been selected
	 * @param {string} name
	 * 		the name of the doctor to search for
	 */
	searchForName: function(name) {
		desiredDoctor.sendKeys(name);
		searchButton.click();
	},

	/**
	 * Adds a doctor or facility to the comparison queue
	 * @param {string} name
	 * 		the name of the doctor or facility to be added
	 */
	addToCompare: function(name) {
		var doctor = element(by.linkText(name));
  		var card = doctor.element(by.xpath('..')).element(by.xpath('..'));
  		card.element(by.className('compare-icon-main')).click();
	},

	/**
	 * Sends an email when the email form is open
	 */
	sendEmail: function() {
		var form = element(by.className('email-results-wrapper'));
		form.element(by.css('[type="submit"]')).click();
	},

	/**
	 * Resets the search filters on a results page
	 */
	resetFilters: function() {
		element(by.cssContainingText('button', 'Reset Filters')).click();
	},

	/**
	 * Scrolls down to the bottom of the current screen the number of times specified
	 * @param {number} numScrolls the number of times to scroll to the bottom of the page
	 */
	scroll: function(numScrolls) {
	    for(var i = 0; i < numScrolls; i++) {
  			browser.executeScript('window.scrollTo(0, document.body.scrollHeight)', function() {
    		});
    		browser.sleep(2000);
  		}
	},

	/**
	 * Selects the facility tab on the search page
	 */
	findFacility: function() {
		element(by.cssContainingText('button', 'Find Facility')).click();
	},

	/**
	 * While logged in, select a doctor or facility as a favorite
	 */
	favFromDetails: function() {
		element(by.className('favorite')).click();
	},

	/**
	 * While logged in, move to the favorites page
	 */
	favoritesPage: function() {
		var loggedIn = element(by.css('[ng-show="USER_INFO.logged_in"]'));
		loggedIn.element(by.className('fav-select')).click();
		var list = element(by.cssContainingText('a', 'View full list'));
		list.click();
	}
};