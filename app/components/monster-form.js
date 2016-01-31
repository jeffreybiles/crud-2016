import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(){
      this.attrs.save()
    }
  },
  isHighLevel: Ember.computed.gte('model.level', 10)
});
