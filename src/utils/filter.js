import { isPointPlanned, isPointPassed } from './task';

const FilterTypes = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PAST: 'past'
};

const filter = {
  [FilterTypes.EVERYTHING]: (points) => points.map((point) => point),
  [FilterTypes.FUTURE]: (points) => points.filter((point) => isPointPlanned(point.startDate, point.endDate)),
  [FilterTypes.PAST]: (points) => points.filter((point) => isPointPassed(point.startDate, point.endDate))
};

export { filter };
