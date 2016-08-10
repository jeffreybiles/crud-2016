import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(changeset){
      changeset.save().then(()=>{
        this.transitionToRoute('monsters.monster.show', changeset.get('id'));
      });
    },
    rollback(changeset){
      changeset.rollback();
    }
  }
});
