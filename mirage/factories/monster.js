import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name: 'Sparkachu',
  level: 2,
  imageUrl: 'https://s3.amazonaws.com/monsterbattle/electric.png',
  price: 20,
});
