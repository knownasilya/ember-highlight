# ember-highlight

Highlight a given term(s) inside the `{{highlight-terms}}` component block.

[![NPM][npm-badge-img]][npm-badge-link]
[![Build Status][travis-badge]][travis-badge-url]
[![Ember Observer Score][ember-observer-badge]][ember-observer-url]

See the [demo].  
Uses [jquery-highlight] internally.

## Usage

```hbs
{{#highlight-terms 'hello' 'joh'}}
  Hello my name is Johnny.
{{/highlight-terms}}
```

Default term wrapper is `span.highlight` which is styled automatically
by a single style, see `vendor/simple.css`. To override just add your own style
to `.highlight-terms .highlight`.

## Attributes

The positional params map to `term`. Each param can be an array of
terms, which are automatically flattened.

* `caseSensitive` - Defaults to `false`.
* `wordsOnly` - Defaults to `false`.
* `term` - String or Array of strings.

## Testing

```no-highlight
ember test --server
```

Visit `http://localhost:4200/ember-highlight/` to see the demo app.

### Building Demo (Github Pages)

Build by checking out the relevant branch, since the test dummy app
is actually the demo app.

Run the following command:

```no-highlight
ember github-pages:commit --message <message describing demo release>
```

[jquery-highlight]: https://github.com/knownasilya/jquery-highlight
[npm-badge-img]: https://badge.fury.io/js/ember-highlight.svg
[npm-badge-link]: http://badge.fury.io/js/ember-highlight
[travis-badge]: https://travis-ci.org/knownasilya/ember-highlight.svg
[travis-badge-url]: https://travis-ci.org/knownasilya/ember-highlight
[ember-observer-badge]: http://emberobserver.com/badges/ember-highlight.svg
[ember-observer-url]: http://emberobserver.com/addons/ember-highlight
[demo]:  http://knownasilya.github.io/ember-highlight/
