import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('monster-form', 'Integration | Component | monster form', {
  integration: true
});

test('it renders', function(assert) {
  this.set('model', {name: 'Sparkachu'});
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{monster-form model=model}}`);
  //
  assert.equal(this.$('.edit-name input').val(), 'Sparkachu');
  //
  // // Template block usage:"
  // this.render(hbs`
  //   {{#monster-form}}
  //     template block text
  //   {{/monster-form}}
  // `);
  //
  // assert.equal(this.$().text().trim(), 'template block text');
});
