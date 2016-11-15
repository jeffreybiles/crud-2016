import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { getSelectedMonster } from 'crud-2016/reducers/items';
import connect from 'ember-redux/components/connect';
var stateToComputed = (state) => {
  return {
    monster: getSelectedMonster(state)
  };
};

var dispatchToActions = (dispatch) =>{
  return {
    save: (newData) => {
      dispatch({type: 'EDIT_MONSTER', data: newData})
    }
  }
}

var MonsterEditComponent = Ember.Component.extend({
  layout: hbs`{{monster-form monster=monster save=(action 'save')}}`
})

export default connect(stateToComputed, dispatchToActions)(MonsterEditComponent);
