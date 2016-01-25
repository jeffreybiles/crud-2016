import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('monsters', function(){
    this.route('monster', {path: ':monster_id'}, function(){
      this.route('show')
      this.route('edit')
    })
    this.route('new')
  })
});

export default Router;
