import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { set } from '@ember/object';

module('Integration | Component | navi-search-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<NaviSearchBar />`);

    assert.equal(this.element.textContent.trim(), '');
  });

  test('click search button', async function(assert) {
    await render(hbs`<NaviSearchBar />`);

    set(this, 'searchQuery', 'Hello!');

    await click(find('.search-button'));

    assert.dom('.results').hasText('A search result');
  });
});