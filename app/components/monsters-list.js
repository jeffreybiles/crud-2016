import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import connect from 'ember-redux/components/connect';

var stateToComputed = (state) => {
  return {
    monsters: state.monsters.all
  };
};

var dispatchToActions = (dispatch) => {
  return {
    // remove: (id) => ajax(`/api/users/${id}`, 'DELETE').then(() => dispatch({type: 'REMOVE_USER', id: id}))
  };
};

var MonsterListComponent = Ember.Component.extend({
});

export default connect(stateToComputed, dispatchToActions)(MonsterListComponent);
