import { validatePresence, validateNumber } from 'ember-changeset-validations/validators';
import incrementValidator from '../validators/increment';

export default {
  name: validatePresence(true),
  level: [
    validatePresence(true),
    validateNumber({gte: 1, lte: 99}),
    validateNumber({integer: true}),
    incrementValidator(2)
  ]
}
