import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // `findAll` is new in Ember Data 2.0, the equivalent of `find` with only one argument
    return this.store.findAll('monster');
  }
})
