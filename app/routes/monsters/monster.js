import route from 'ember-redux/route';
import ajax from 'crud-2016/utilities/ajax-helper';

var model = (dispatch, options) => {
  return ajax(`/monsters/${options.monster_id}`, 'GET').then(response => dispatch({type: 'DESERIALIZE_MONSTER', response: response}));
}

export default route({model})();
