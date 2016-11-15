import Ember from 'ember';
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
var MonsterShowComponent = Ember.Component.extend({})

export default connect(stateToComputed, dispatchToActions)(MonsterShowComponent);
