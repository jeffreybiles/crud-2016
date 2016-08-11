import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    validateProperty(changeset, property){
      return changeset.validate(property)
    }
  }
});
