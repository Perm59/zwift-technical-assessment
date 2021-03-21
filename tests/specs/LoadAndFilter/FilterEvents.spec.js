import {expect} from 'chai';
import HomePage from '../../pages/HomePage';
import EventsPage from '../../pages/EventsPage';
import NavigMenu from '../../pages/NavigMenu';
import helper from '../../helper.js';
import { eventsFilter } from '../../fixtures/assert.js';

describe('FILTER EVENTS', () => {
  before('should open events page and validate the page is loaded', () => {
    HomePage.open();
    helper.waitForPageLoaded();
    HomePage.openSideNavMenu();
    NavigMenu.openEventsPage();
    helper.waitForPageLoaded();
  });

  it('should validate that events list has changed after filtering', () => {
    const eventsCountBeforeFilter = EventsPage.eventsCount;
    EventsPage.filterSportIntensTimes(eventsFilter.sportType, eventsFilter.intensity, eventsFilter.startTime[0]);

    expect(eventsCountBeforeFilter).not.eq(EventsPage.eventsCount);
  });

  it('should validate that events list meet the filtering criteria and system behaves correctly when list is empty', () => {
    if (EventsPage.eventsListNotEmpty()){
      expect(EventsPage.getEventSportTypeList.every(el => el === eventsFilter.sportType)).true;
      expect(EventsPage.eventsCount).eq(
        EventsPage.getIntensityList.filter(el => el === eventsFilter.intensity).length);
      expect(EventsPage.getEventTimeList.every(
        el => el[0] >= eventsFilter.startTime[1] && el[0] < eventsFilter.startTime[2] &&
            el[1].slice(-2) === eventsFilter.startTime[3])).true;
    } else {
      expect(EventsPage.noResultsNote.isDisplayed()).true;
    }
  });
});
