import { test } from 'qunit';
import moduleForAcceptance from 'crud-2016/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | monster index');

test('visiting /monsters', function(assert) {
  let monsters = server.createList('monster', 10);

  visit('/monsters');

  andThen(function() {
    assert.equal(currentURL(), '/monsters');
    assert.equal(find('.monster').length, 10);
    assert.equal(find('.monster .test-monster-name:first').text(), monsters[0].name);
  });

  click('.monster:first');

  andThen(function(){
    assert.equal(currentURL(), '/monsters/1/show');
    assert.equal(find('.name').text(), monsters[0].name);
  });
});
