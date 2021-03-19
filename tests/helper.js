module.exports = {

  clickElement: function(locator) {
    locator.waitForClickable({timeout: 10000});
    locator.click();
  },

  waitForPageLoaded: function() {
    browser.waitUntil(() => {
      const state = browser.execute(() =>
        document.readyState);
      return state === 'complete';
    }, {timeout: 10000});
  },
};
