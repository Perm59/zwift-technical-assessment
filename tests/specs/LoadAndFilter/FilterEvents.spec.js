import {expect} from 'chai';
import HomePage from '../../pages/HomePage';
import EventsPage from '../../pages/EventsPage';
import NavigMenu from '../../pages/NavigMenu';
import helper from '../../helper.js';
import { filter } from '../../fixtures/assert.js';

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
    EventsPage.filterSportIntensTimes(filter.sportType, filter.intensity, filter.startTime[0]);

    expect(eventsCountBeforeFilter).not.eq(EventsPage.eventsCount);
  });

  it('should validate that events list meet the filtering criteria and system behaves correctly when list is empty', () => {
    if (EventsPage.eventsListNotEmpty()){
      expect(EventsPage.eventsCount).eq(
        EventsPage.getEventSportTypeList.filter(el => el === filter.sportType).length);
      expect(EventsPage.eventsCount).eq(
        EventsPage.getIntensityList.filter(el => el === filter.intensity).length);
      expect(EventsPage.eventsCount).eq(EventsPage.getEventTimeList.filter(
        el => el[0] >= filter.startTime[1] && el[0] < filter.startTime[2] && el[1].slice(-2) === filter.startTime[3]).length);
    } else {
      expect(EventsPage.noResultsNote.isDisplayed()).true;
    }
  });
});
