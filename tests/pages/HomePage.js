import BasePage from './BasePage';
import helper from '../helper.js';
import { homeUrl } from '../fixtures/sitemap.js';

class HomePage extends BasePage {

  get title() {
    return browser.getTitle();
  }

  get leftNavMenu() {
    return browser.$('//ul[@data-testid="primary-nav-left"]');
  }

  get tryForFreeBtn() {
    return browser.$('//header//span[text()="Try free for 7 days"]');
  }

  get signInBtn() {
    return browser.$('//header//span[text()="Sign In"]');
  }

  get terms() {
    return browser.$('//footer//span[contains(text(),"Terms")]');
  }

  get chat() {
    return browser.$('//div[contains(@class,"solvvy-chat-icon")]');
  }

  get sideNavBtn() {
    return browser.$('//button[@aria-label="Open side navigation"]');
  }

  get acceptCookiesBtn() {
    return browser.$('//button[text()="Accept All"]');
  }

  open() {
    super.open(homeUrl);
    this.acceptCookies();
  }

  acceptCookies(){
    helper.clickElement(this.acceptCookiesBtn);
  }

  openSideNavMenu() {
    helper.clickElement(this.sideNavBtn);
  }
}

export default new HomePage();
