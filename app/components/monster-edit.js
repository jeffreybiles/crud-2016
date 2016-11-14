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

  }
}

var MonsterEditComponent = Ember.Component.extend({
  layout: hbs`{{monster-form monster=monster}}`
})

export default connect(stateToComputed, dispatchToActions)(MonsterEditComponent);
