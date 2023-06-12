import { points } from '../mock/point.js';
import { destinations } from '../mock/destinations.js';
import { offersByType } from '../mock/offers.js';

export default class PointsModel {
    constructor() {
      this.points = [];
    }
  
    init(points, destinations, offers) {
      this.points = points;
      this.destinations = destinations;
      this.offers = offers;
    }
  
    getPoints() {
      return this.points;
    }
  
    getDestinations() {
      return this.destinations;
    }
  
    getOffers() {
      return this.offers;
    }
  }