import { render } from './render';
import FiltersView from './view/filters';
import Trip from './presenter/trip';
import MenuView from './view/menu.js';
import PointsModel from './model/point-model';

const menuContainerElement = document.querySelector('.trip-controls__navigation');
const filtersContainerElement = document.querySelector('.trip-controls__filters');
const tripContainerElement = document.querySelector('.trip-events');
const tripPresenter = new Trip(tripContainerElement, PointsModel());
const pointsModel = new PointsModel();

render(new MenuView(), menuContainerElement);
render(new FiltersView(), filtersContainerElement);
tripPresenter.init();
