import BasePage from './BasePage';
import helper from '../helper.js';

class NavigMenu extends BasePage {

  get eventsBtn() {
    return browser.$('//span[text()="Events"]');
  }

  openEventsPage() {
    helper.clickElement(this.eventsBtn);
  }
}

export default new NavigMenu();
