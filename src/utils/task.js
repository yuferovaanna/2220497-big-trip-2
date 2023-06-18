import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { getRandomInteger } from './common';

dayjs.extend(duration);

const HOUR_IN_DAY = 24;
const MIN_IN_HOUR = 60;

const convertPointDateIntoDay = (pointDate) => dayjs(pointDate).format('MMM D');

const convertPointDateIntoHour = (pointDate) => dayjs(pointDate).format('HH:mm');

const convertPointDateForEditForm = (pointDate) => dayjs(pointDate).format('DD/MM/YY HH:mm');

const generateDates = () => {
  const startDate = dayjs().subtract(getRandomInteger(HOUR_IN_DAY * MIN_IN_HOUR * -2, HOUR_IN_DAY * MIN_IN_HOUR * 2), 'minutes');
  return {
    startDate: startDate,
    endDate: startDate.add(getRandomInteger(MIN_IN_HOUR / 2, HOUR_IN_DAY * MIN_IN_HOUR * 2), 'minutes')
  };
};

const subtractDates = (dateFrom, dateTo) => {

  const diffInTotalMinutes = Math.ceil(dayjs(dateTo).diff(dayjs(dateFrom), 'minute', true));
  const diffInHours = Math.floor(diffInTotalMinutes / MIN_IN_HOUR) % HOUR_IN_DAY;
  const diffInDays = Math.floor(diffInTotalMinutes / (MIN_IN_HOUR * HOUR_IN_DAY));

  if ((diffInDays === 0) && (diffInHours === 0)) {
    return dayjs.duration(diffInTotalMinutes, 'minutes').format('mm[M]');
  } else if (diffInDays === 0) {
    return dayjs.duration(diffInTotalMinutes, 'minutes').format('HH[H] mm[M]');
  }
  return dayjs.duration(diffInTotalMinutes, 'minutes').format('DD[D] HH[H] mm[M]');
};

const isDatesEqual = (dateA, dateB) => dayjs(dateA).isSame(dateB, 'D');

const isSubmitDisabledByDate = (dateTo, dateFrom) => dayjs(dateTo).diff(dayjs(dateFrom)) <= 0;

const isSubmitDisabledByPrice = (price) => Number(price) > 0 && Number.isInteger(Number(price));

const checkDatesRelativeToCurrent = (dateFrom, dateTo) => dayjs(dateFrom).isBefore(dayjs()) && dayjs(dateTo).isAfter(dayjs());

const isPointPlanned = (dateFrom, dateTo) => dayjs(dateFrom).isAfter(dayjs()) || checkDatesRelativeToCurrent(dateFrom, dateTo);

const isPointPassed = (dateFrom, dateTo) => dayjs(dateTo).isBefore(dayjs()) || checkDatesRelativeToCurrent(dateFrom, dateTo);

const isFavoriteOption = (isFavorite) => (isFavorite) ? 'event__favorite-btn--active' : '';

const capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

export {convertPointDateIntoDay, convertPointDateIntoHour, convertPointDateForEditForm, generateDates, subtractDates, isFavoriteOption, capitalizeFirstLetter, isPointPlanned, isPointPassed, isSubmitDisabledByDate, isSubmitDisabledByPrice, isDatesEqual};
