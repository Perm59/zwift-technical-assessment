import {expect} from 'chai';
import HomePage from '../../pages/HomePage';
import helper from '../../helper.js';

describe('LOAD HOME PAGE', () => {
  before('should open zwift.com and validate the home page is loaded', () => {
    HomePage.open();
    helper.waitForPageLoaded();
  });

  it('should validate top left navigation menu is present', () => {
    expect(HomePage.leftNavMenu.isDisplayed()).true;
  });

  it('should validate try for free button is present', () => {
    expect(HomePage.tryForFreeBtn.isDisplayed()).true;
  });

  it('should validate signIn button is present', () => {
    expect(HomePage.signInBtn.isDisplayed()).true;
  });

  it('should validate `terms and conditions` link is present', () => {
    expect(HomePage.terms.isDisplayed()).true;
  });

  it('should validate chat button is present', () => {
    expect(HomePage.chat.isDisplayed()).true;
  });
});
