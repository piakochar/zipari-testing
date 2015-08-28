exports.config = {
  onPrepare: function() {
    browser.manage().window().setSize(1600, 1000);

    global.shopBaseUrl = 'shop/#/info';

    global.shopButton = element(by.className('main-shop-btn'));

    global.shopEmail = 'test@test6.com';
    global.emailField = element(by.className('email-input'));

    global.shopZip = '07026';
    global.zipField = element(by.className('zip-input'));

    global.toCover = element(by.className('z37-you'));

    global.shopDob = '01/01/1986';
    global.dobField = element(by.className('cover-yourself'));

    global.shopIncome = '20000';
    global.incomeField = element(by.className('subsidy-income-input'));

    global.householdSize = '1';
    global.houseSizeField = element(by.className('subsidy-housesize-input'));

    global.firstContinue = element(by.id('submit')).element(by.className('cta'));
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['shopping-spec.js'],
  rootElement: 'html',
  framework: 'jasmine2',
  baseUrl: 'http://newjersey.healthrepublic.prod.fuwt.net/',
  // baseUrl: 'https://limiteduat:uat@newjersey-uat.healthrepublic.us/',
  // baseUrl: 'http://django1-newjersey.healthrepublic.prod.fuwt.net/',
  multiCapabilities: [
      {browserName: 'chrome'},
  ],
  allScriptsTimeout: 60000,

  jasmineNodeOpts: {defaultTimeoutInterval: 1000 * 120}
};