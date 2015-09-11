This repository contains tests for zipari projects. 

#####To run these tests:

1. Start a selenium session (with the command 'webdriver-manager start')
2. Move into the directory containing the config file you would like to run (for example, to run any scout tests, you should be in the /protractor/scout file.)
3. In the specs section of the config file you are running, specify which spec files you would like to run. Also specify how many browsers (and of which type) you would like to run by adding browsers to the multiCapabilities section.
4. Run the command 'protractor conf.js'. Allow the browsers to run, and avoid interfering with them or running any other processes on your machine while they are running, as this may slow down or otherwise impede the tests.

####Scout Notes:
  1. With regard to tests that involve choosing doctors/facilities from the search results page, only the first few results are present when the page first loads, so it is either necessary to scroll down in order to access later doctors/facilities, or to choose results that within the first 9 or so that appear on the page. 
  2. Must call helper.findDoctor() before trying to search for anything in order to reach the search page. This is because simply going to the url https://newjersey.healthrepublic.us/providersearch/ redirects to the gateway page.
  3. To run login-spec.js:
  	1. Comment out the specs section in the conf.js file
  	2. Uncomment the desired number of browsers from the designated section in the multiCapabilities section (comment out any browser definitions that do not have 'specs' sections in them). The browsers for this spec are the five browsers in the multiCapabilities section that have their own 'specs' sections. Each of the 'specs' sections for these browsers contains a reference to a file that sets global variables for username and password to those specific to a test account created in UAT.
  	3. Make sure baseUrl is equal to the UAT url
