import Ember from 'ember';
import MonsterValidations from '../../../validations/monster';

export default Ember.Controller.extend({
  MonsterValidations,
  actions: {
    save(changeset){
      changeset.validate().then(()=>{
        if(changeset.get('isValid')){
          changeset.save().then(()=>{
            this.transitionToRoute('monsters.monster.show', changeset.get('id'));
          });
        }
      })
    },
    rollback(changeset){
      changeset.rollback();
    }
  }
});
