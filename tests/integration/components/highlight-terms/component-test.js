import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | highlight terms', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    await render(hbs`{{highlight-terms}}`);

    assert.equal(find('*').textContent.trim(), '');

    // Template block usage:"
    await render(hbs`
      {{#highlight-terms 'hello' 'fri'}}
        hello friend
      {{/highlight-terms}}
    `);

    var $highlights = this.$('.highlight');

    assert.equal(find('*').textContent.trim(), 'hello friend', 'Correct content');
    assert.equal($highlights.length, 2, 'Has two highlights');
    assert.equal($highlights.get(0).textContent, 'hello', 'Whole word is correct');
    assert.equal($highlights.get(1).textContent, 'fri', 'Partial word is correct');
  });

  test('it flattens', async function(assert) {
    this.set('terms', [['hello', 'bob'], 'bye']);

    await render(hbs`
      {{#highlight-terms terms}}
        hello friend bob, goodbye
      {{/highlight-terms}}
    `);

    var $highlights = this.$('.highlight');

    assert.equal(find('*').textContent.trim(), 'hello friend bob, goodbye', 'Correct content');
    assert.equal($highlights.length, 3, 'Has three highlights');
    assert.equal($highlights.get(0).textContent, 'hello', 'Whole word is correct');
    assert.equal($highlights.get(1).textContent, 'bob', 'Whole word is correct');
    assert.equal($highlights.get(2).textContent, 'bye', 'Partial word is correct');
  });
});
