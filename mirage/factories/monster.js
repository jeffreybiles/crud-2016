import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {return 'Sparkachu' + i ;},
  level: 3,
  price: 15,
  image_url: "https://s3.amazonaws.com/monsterbattle/electric.png"
});
