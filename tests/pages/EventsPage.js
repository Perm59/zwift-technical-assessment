import BasePage from './BasePage';
import helper from '../helper.js';
import { eventsUrl } from '../fixtures/sitemap.js';

class EventsPage extends BasePage {

  get title() {
    return browser.getTitle();
  }

  get sideNavBtn() {
    return browser.$('//button[@aria-label="Open side navigation"]');
  }

  get eventsMenuBtn() {
    return browser.$('//a[@href="/events"]');
  }

  get filterBtn() {
    return browser.$('//button[text()="Filter events"]');
  }

  get eventsCount() {
    return browser.$$('//div[@class="tab-listing"]').length;
  }

  eventParameter(text) {
    return browser.$$(`//*[@class="${text}"]`);
  }

  get eventMap() {
    return browser.$('//*[@class="listing-map"]');
  }

  get noResultsNote() {
    return browser.$('//*[text()="No results."]');
  }

  open() {
    super.open(eventsUrl);
  }

  openEventsFilter() {
    if (!this.filterBtn.isDisplayedInViewport()) {
      this.filterBtn.scrollIntoView({block: 'center'});
    }
    helper.clickElement(this.filterBtn);
  }

  filterSports(type) {
    helper.clickElement(browser.$(`//div[text()="Sports"]/../button[@value="${type}"]`));
  }

  filterIntensities(type) {
    helper.clickElement(browser.$(`//div[text()="Intensities"]/../button[@value="${type}"]`));
  }

  filterStartTime(type) {
    helper.clickElement(browser.$(`//div[text()="Start Times"]/../button[@value="${type}"]`));
  }

  applyFilters() {
    helper.clickElement(browser.$('//button[@class="apply-button"]'));
  }

  filterSportIntensTimes(sport, intens, time){
    this.openEventsFilter();
    this.filterSports(sport);
    this.filterIntensities(intens);
    this.filterStartTime(time);
    this.applyFilters();
  }

  eventsListNotEmpty() {
    return this.eventMap.isExisting();
  }

  get getEventSportTypeList(){
    let sportTypesList = [];
    sportTypesList.push(...this.eventParameter('map-sport-type').map(el=>el.getText()));
    return sportTypesList;
  }

  get getEventTimeList(){
    let timesList = [];
    timesList.push(...this.eventParameter('listing-header').map(el=>el.getText().split(' ')[0].split(':')));
    return timesList;
  }

  get getIntensityList(){
    let intensitiesList = [];
    intensitiesList.push(...this.eventParameter('group-label').map(el=>el.getAttribute('data-label')));
    return intensitiesList;
  }
}

export default new EventsPage();
