import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({
  actions: {
    save(){
      this.attrs.save(this.get('buffer'));
    }
  },
  didReceiveAttrs(...args) {
    this._super(args);
    var properties = ['id', 'name', 'level', 'imageUrl', 'price']
    var monster = args[0].newAttrs.monster.value;
    this.set('buffer', monster)
  },
  isHighLevel: Ember.computed.gte('buffer.level', 10),
  layout: hbs`
    <div class="monster-card">
      <div class="edit-name">Name: {{input value=buffer.name}}</div>
      <div class="edit-level">Level: {{input value=buffer.level}}</div>
      <div class="edit-level-message">
        {{#liquid-if isHighLevel class="high-level"}}
          Wow!  Such a high level!
        {{else}}
          Work harder, level up.
        {{/liquid-if}}
      </div>
      <img src={{buffer.imageUrl}} />
      <br>
      Image Source: {{input value=buffer.imageUrl}}
      <br>
      Price (in dollars): {{input value=buffer.price}}
    </div>

    <button {{action 'save'}} class="save-button">Save</button>
  `
});
