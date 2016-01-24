// active-model-adapter is coming from a separate addon as of Ember Data 2.0
import ActiveModelAdapter from 'active-model-adapter';

// This will take care of all the other adapters, and set the application serializer to active-model as well
export default ActiveModelAdapter.extend({
  namespace: 'v2' //add this to the beginning of the url, after the host
})
