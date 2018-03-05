import { run } from '@ember/runloop';
import Component from '@ember/component';
import layout from './template';

const HighlightTerm = Component.extend({
  layout,
  classNames: ['highlight-terms'],

  didReceiveAttrs() {
    this._super(...arguments);
    var term = this.get('term');
    var options = this.getProperties('caseSensitive', 'wordsOnly');

    run.scheduleOnce('afterRender', this, function () {
      this.unhighlight();
      this.highlight(term, options);
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    this.unhighlight();
  },

  highlight(term, options) {
    if (term) {
      if (Array.isArray(term)) {
        term = term.reduce((all, item) => {
          if (item !== undefined) {
            if (Array.isArray(item)) {
              all = all.concat(...item);
            } else {
              all.push(item);
            }
          }

          return all;
        }, []);
      }

      if (this.$()) {
        this.$().highlight(term, options);
      }
    }
  },

  unhighlight() {
    if (this.$()) {
      this.$().unhighlight();
    }
  }
});

HighlightTerm.reopenClass({
  positionalParams: 'term'
});

export default HighlightTerm;
