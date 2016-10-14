import { module, test } from 'qunit';
import validateValidateIncrement from 'crud-2016/validators/validate-increment';

module('Unit | Validator | validate-increment');

test('it exists', function(assert) {
  assert.ok(validateValidateIncrement());
});
