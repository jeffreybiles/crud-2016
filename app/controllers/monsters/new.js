import Ember from 'ember';

export default Ember.Controller.extend({
  newModel: {},
  actions: {
    save(){
      let model = this.store.createRecord('monster', this.get("newModel"));
      this.set("newModel", {});
      model.save().then(()=>{
        this.transitionToRoute('monsters.monster.show', model);
      });
    }
  }
});
