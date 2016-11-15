import { uniq, remove } from '../utilities/array-helper';

const initialState = {
  all: []
};

export default ((state, action) => {
  if (action.type === 'DESERIALIZE_MONSTERS') {
    return Object.assign({}, state, {
      all: uniq(state.all, action.response.monsters)
    });
  }
  if (action.type === 'DESERIALIZE_MONSTER') {
    return Object.assign({}, state, {
      all: uniq(state.all, action.response.monster),
      selectedMonster: action.response.monster.id
    });
  }
  if(action.type === 'EDIT_MONSTER') {
    return Object.assign({}, state, {
      all: uniq(state.all, action.data)
    })
  }
  return state || initialState
})
