import _ from 'lodash/lodash';

export function getSelectedMonster(state) {
    return _.get(state.monsters.all, state.monsters.selectedMonster);
}
