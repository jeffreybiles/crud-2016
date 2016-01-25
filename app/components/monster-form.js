import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(){
      // grabs the 'save' method off the attrs, calls it
      // you could chain stuff on it if you wanted, since it will return a promise
      this.attrs.save()
    }
  }
});
