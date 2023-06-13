import { RenderPosition, render } from './framework/render.js';
import PointsModel from './model/point-model.js';
import PointFilterView from './view/filters.js';
import RoutePresenter from './presenter/trip.js';
import TripInfoView from './view/info-trip.js';
import { generateFilter } from './mock/filter.js';

const headerElement = document.querySelector('.page-header');
const mainElement = document.querySelector('.page-body__page-main');
const tripMainElement = document.querySelector('.trip-main');
const tripControlsElement = headerElement.querySelector('.trip-controls__filters');
const tripEventsElement = mainElement.querySelector('.trip-events');

const routePresenter = new RoutePresenter();
const pointsModel = new PointsModel();
const filters = generateFilter(pointsModel.points);

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new PointFilterView(filters), tripControlsElement);

routePresenter.init(tripEventsElement, pointsModel);
