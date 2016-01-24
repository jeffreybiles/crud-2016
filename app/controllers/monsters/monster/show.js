import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroyCard(){
      this.get("model").destroyRecord().then(()=>{
        this.transitionToRoute('monsters')
      })
    }
  }
})
