import { module, test } from 'qunit';
import validateIncrement from 'crud-2016/validators/increment';

module('Unit | Validator | increment');

test('it exists', function(assert) {
  assert.ok(validateIncrement());
});
