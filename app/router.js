import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // note that we're using 'route', not 'resource'... 'resource' is deprecated
  this.route('monsters')
});

export default Router;
