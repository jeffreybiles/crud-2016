import Ember from 'ember';
import { getSelectedMonster } from 'crud-2016/reducers/items';
import connect from 'ember-redux/components/connect';
var stateToComputed = (state) => {
  return {
    monster: getSelectedMonster(state)
  };
};

export default connect(stateToComputed, dispatchToActions)(WelpResultComponent);

// export default Ember.Controller.extend({
//   actions: {
//     destroyCard(){
//       this.get("model").destroyRecord().then(()=>{
//         this.transitionToRoute('monsters');
//       });
//     }
//   }
// });
