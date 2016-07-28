import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(){
      this.attrs.save(this.get('changeset'));
    },
    rollback(){
      this.attrs.rollback(this.get('changeset'));
    }
  },
  isHighLevel: Ember.computed.gte('model.level', 10)
});
