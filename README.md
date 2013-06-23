# Backbone View Enhanced Events Declaration

Sometimes you have a number of elements on a page which should react on events by mixing already defined callbacks.
In order not to create redundant aggregative methods I developed the mixin, which allows you to use this approach.

# Usage

1. Include the script on your page after backbone.js

```html
...
  <script type="text/javascript" src="/vendor/assets/javascripts/backbone.js"></script>
  <script type="text/javascript" src="/vendor/assets/javascripts/backbone.view.enhanced_events_declaration.js"></script>
...
```

2. That's it! Now you can inherit your classes from `Backbone.View` and use all the convenience of enhanced events declaration.

```coffeescript
class ContentView extends Backbone.View

  events:
    'click .decorate'     : 'decorate'
    'click .reorder'      : 'reorder'
    'click .mix-it'       : 'decorate reorder'
    'click .mix-it-again' : [ 'decorate', 'reorder' ]
    'click .mix-it-quick' : [ 'decorate', =>( console.log('reordering method invoked') ) ]

  decorate: (e) ->
  # ...

  reorder: (e) ->
  #  ...
```

Author: Alexander Kaupanin
