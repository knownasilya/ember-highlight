import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('highlight-terms', 'Integration | Component | highlight terms', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{highlight-terms}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#highlight-terms 'hello' 'fri'}}
      hello friend
    {{/highlight-terms}}
  `);

  var $highlights = this.$('.highlight');

  assert.equal(this.$().text().trim(), 'hello friend', 'Correct content');
  assert.equal($highlights.length, 2, 'Has two highlights');
  assert.equal($highlights.get(0).textContent, 'hello', 'Whole word is correct');
  assert.equal($highlights.get(1).textContent, 'fri', 'Partial word is correct');
});

test('it flattens', function (assert) {
  this.set('terms', [['hello', 'bob'], 'bye']);

  this.render(hbs`
    {{#highlight-terms terms}}
      hello friend bob, goodbye
    {{/highlight-terms}}
  `);

  var $highlights = this.$('.highlight');

  assert.equal(this.$().text().trim(), 'hello friend bob, goodbye', 'Correct content');
  assert.equal($highlights.length, 3, 'Has three highlights');
  assert.equal($highlights.get(0).textContent, 'hello', 'Whole word is correct');
  assert.equal($highlights.get(1).textContent, 'bob', 'Whole word is correct');
  assert.equal($highlights.get(2).textContent, 'bye', 'Partial word is correct');
});
