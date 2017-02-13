'use strict';

describe('my app', function() {

  it('should automatically redirect to dashboard when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

});
