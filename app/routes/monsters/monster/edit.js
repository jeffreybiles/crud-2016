import Ember from 'ember';
import Changeset from 'ember-changeset';

export default Ember.Route.extend({
  setupController(controller, model){
    controller.set('changeset', new Changeset(model))
  },
  actions: {
    willTransition(transition){
      if(this.get('controller.changeset.isDirty')){
        if(!confirm('You have unsaved changes.  Are you sure you want to leave this page?')){
          transition.abort();
        }
      }
    }
  }
});
