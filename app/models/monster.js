import DS from 'ember-data';

// Let Ember Data know what data fields to expect from the server
// All other fields will be discarded
export default DS.Model.extend({
  name: DS.attr('string'),
  level: DS.attr('number'),
  imageUrl: DS.attr('string'),
  price: DS.attr('number'),
});
