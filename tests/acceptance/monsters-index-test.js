import { test } from 'qunit';
import moduleForAcceptance from 'crud-2016/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | monsters index');

test('visiting /monsters', function(assert) {
  server.createList('monster', 5);
  visit('/monsters');

  andThen(function() {
    assert.equal(currentURL(), '/monsters');
    assert.equal($('.monster').length, 5);
  });
});
