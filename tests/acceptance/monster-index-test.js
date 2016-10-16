import { test } from 'qunit';
import moduleForAcceptance from 'crud-2016/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | monster index');

test('visiting /monsters', function(assert) {
  server.createList('monster', 10);
  
  visit('/monsters');

  andThen(function() {
    assert.equal(currentURL(), '/monsters');
    assert.equal(find('.monster').length, 10);
  });
});
