import { RenderPosition, render } from './framework/render.js';
import NewPointButtonView from './view/new-point-btn-view.js';
import FilterModel from './model/filter-model.js';
import PointsModel from './model/point-model.js';
import RoutePresenter from './presenter/trip-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import TripInfoView from './view/info-trip-view.js';
import PointsApiService from './points-api-service.js';

const AUTHORIZATION = 'Basic u4DqBTqNqQB2dQv3';
const END_POINT = 'https://18.ecmascript.pages.academy/big-trip';

const headerElement = document.querySelector('.page-header');
const mainElement = document.querySelector('.page-body__page-main');
const tripMainElement = document.querySelector('.trip-main');
const tripControlsElement = headerElement.querySelector('.trip-controls__filters');
const tripEventsElement = mainElement.querySelector('.trip-events');

const pointsModel = new PointsModel(new PointsApiService(END_POINT, AUTHORIZATION));
const filterModel = new FilterModel();
const routePresenter = new RoutePresenter(tripEventsElement, pointsModel, filterModel);
const filterPresenter = new FilterPresenter(tripControlsElement, filterModel, pointsModel);
const newPointButtonComponent = new NewPointButtonView();

const handleNewPointFormClose = () => {
  newPointButtonComponent.element.disabled = false;
};

const handleNewPointButtonClick = () => {
  routePresenter.createPoint(handleNewPointFormClose);

  newPointButtonComponent.element.disabled = true;
};


render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);


filterPresenter.init();
routePresenter.init();
pointsModel.init()
  .finally(() => {
    render(newPointButtonComponent, tripMainElement);
    newPointButtonComponent.setClickHandler(handleNewPointButtonClick);
  });
