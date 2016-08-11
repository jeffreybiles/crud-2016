import { validatePresence, validateNumber } from 'ember-changeset-validations/validators';

export default {
  name: validatePresence(true),
  level: [
    validateNumber({gte: 1, lte: 99}),
    validateNumber({integer: true})
  ],
  price: [
    validateNumber({gte: 200})
  ]
}
