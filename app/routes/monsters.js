import route from 'ember-redux/route';
import ajax from '../utilities/ajax-helper';

var model = (dispatch) => {
  return ajax('/monsters', 'GET').then(response => dispatch({type: 'DESERIALIZE_MONSTERS', response: response}));
}

export default route({model})();
