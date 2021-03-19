import {expect} from 'chai';
import HomePage from '../../pages/HomePage';
import EventsPage from '../../pages/EventsPage';
import NavigMenu from '../../pages/NavigMenu';
import helper from '../../helper.js';

const sportType = 'CYCLING';
const intensity = '2';
const startTime = ['morning', 5, 12, 'AM'];
let eventsCountBeforeFilter;

describe('FILTER EVENTS', () => {
  before('should open events page', () => {
    HomePage.open();
    helper.waitForPageLoaded();
    HomePage.openSideNavMenu();
    NavigMenu.openEventsPage();
  });

  it('should validate the events page is loaded', () => {
    helper.waitForPageLoaded();
  });

  it('should count events and record the full events headers list', () => {
    eventsCountBeforeFilter = EventsPage.eventsCount;
  });

  it('should apply filter on sports type, intensities and start times', () => {
    EventsPage.filterSportIntensTimes(sportType, intensity, startTime[0]);
  });

  it('should validate that events list has changed after filtering', () => {
    expect(eventsCountBeforeFilter).not.eq(EventsPage.eventsCount);
  });

  it('should validate that events list meet the filtering criteria and system behaves correctly when list is empty', () => {
    if (EventsPage.eventsListNotEmpty()){
      expect(EventsPage.eventsCount).eq(
        EventsPage.getEventSportTypeList.filter(el => el === sportType).length);
      expect(EventsPage.eventsCount).eq(
        EventsPage.getIntensityList.filter(el => el === intensity).length);
      expect(EventsPage.eventsCount).eq(EventsPage.getEventTimeList.filter(
        el => el[0] >= startTime[1] && el[0] < startTime[2] && el[1].slice(-2) === startTime[3]).length);
    } else {
      expect(EventsPage.noResultsNote.isDisplayed()).true;
    }
  });
});
