import BasePage from './BasePage';
import helper from '../helper.js';

class NavigMenu extends BasePage {

  get eventsBtn() {
    return browser.$('//span[text()="Events"]');
  }

  openEventsPage() {
    if (!this.eventsBtn.isDisplayedInViewport()){
      this.eventsBtn.scrollIntoView({block:'center'});
    }
    helper.clickElement(this.eventsBtn);
  }
}

export default new NavigMenu();
