import { isPointPlanned, isPointPassed } from './task';
import { FilterType } from '../mock/const';

const filter = {
  [FilterType.EVERYTHING]: (points) => points.map((point) => point),
  [FilterType.FUTURE]: (points) => points.filter((point) => isPointPlanned(point.startDate, point.endDate)),
  [FilterType.PAST]: (points) => points.filter((point) => isPointPassed(point.startDate, point.endDate))
};

export {filter};
