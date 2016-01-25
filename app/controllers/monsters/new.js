import Ember from 'ember';

export default Ember.Controller.extend({
  newModel: {},
  // newModel is an empty hash, and the {{mut}} action will add in fields ad hoc
  actions: {
    save(){
      // create the monster record
      let model = this.store.createRecord('monster', this.get("newModel"))
      // reset the newModel so we don't recycle properties next time
      this.set("newModel", {})
      model.save().then(()=>{
        this.transitionToRoute('monsters.monster.show', model)
      })
    }
  }
})
