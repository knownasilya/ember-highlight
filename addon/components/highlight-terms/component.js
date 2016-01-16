import Ember from 'ember';
import layout from './template';

const { run } = Ember;

const HighlightTerm = Ember.Component.extend({
  layout,
  classNames: ['highlight-terms'],

  didReceiveAttrs() {
    var term = this.get('term');
    var options = this.getProperties('caseSensitive', 'wordsOnly');

    run.scheduleOnce('afterRender', this, function () {
      this.unhighlight();
      this.highlight(term, options);
    });
  },

  willDestroyElement() {
    this.unhighlight();
  },

  highlight(term, options) {
    if (term) {
      if (Array.isArray(term)) {
        term = term.reduce((all, item) => {
          if (term !== undefined) {
            if (Array.isArray(item)) {
              all = all.concat(...item);
            } else {
              app.push(item);
            }
          }

          return all;
        }, []);
      }

      this.$().highlight(term, options);
    }
  },

  unhighlight() {
    this.$().unhighlight();
  }
});

HighlightTerm.reopenClass({
  positionalParams: 'term'
});

export default HighlightTerm;
