import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    // `findRecord` is the new Ember Data 2.0 version of `find` with two arguments
    return this.store.findRecord('monster', params.monster_id)
  }
})
