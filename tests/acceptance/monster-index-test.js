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

  click('.edit-button');
  fillIn('.edit-name input', 'Custom Sparkachu');
  click('.save-button');

  andThen(function(){
    assert.equal(currentURL(), '/monsters/1/show');
    assert.equal(find('.name').text(), 'Custom Sparkachu');
  });

  click('.destroy-button');

  andThen(function(){
    assert.equal(currentURL(), '/monsters');
    assert.equal(find('.monster').length, 9);
  });

  click('.create-monster-button');
  fillIn('.edit-name input', 'Second Custom Sparkachu');
  fillIn('.edit-level input', 5);
  click('.save-button');

  andThen(function(){
    assert.equal(currentRouteName(), 'monsters.monster.show');
    assert.equal(find('.name').text(), 'Second Custom Sparkachu');
  });
});
