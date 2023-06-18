import AbstractView from '../framework/view/abstract-view.js';
import { FilterType } from '../mock/const.js';

const emptyListTextType = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PAST]: 'There are no past events now',
};

const createEmptyListTemplate = (filterType) => (
  `<p class="trip-events__msg">${emptyListTextType[filterType]}</p>`
);

export default class EmptyListView extends AbstractView {
  #filterType = null;

  constructor(filterType) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createEmptyListTemplate(this.#filterType);
  }

}
