# Backbone View Enhanced Events Declaration ![Build Status](https://travis-ci.org/simsalabim/backbone.view.enhanced_events_declaration.png "Build Status")

Sometimes you have a number of elements on a page which should react on events by mixing already defined callbacks.
In order not to create redundant aggregative methods I developed a mixin which allows you to use this approach.

# Usage

Since this is a mixin, it simply extends the `Backbone.View` class you're already using and all you need to start using it is to
include the script on your page after `backbone.js`. You don't have to rewrite anything from your previous code.

```html
...
<script type="text/javascript" src="lib/backbone.js"></script>
<script type="text/javascript" src="lib/backbone.view.enhanced_events_declaration.js"></script>
...
```

That's it! Now you can inherit your classes from `Backbone.View` and use all the convenience of enhanced events declaration.

```coffeescript
class ContentView extends Backbone.View

  events:
    'click .decorate'     : 'decorate'
    'click .reorder'      : 'reorder'
    'click .mix-it'       : 'decorate reorder'
    'click .mix-it-again' : [ 'decorate', 'reorder' ]
    'click .mix-it-quick' : [ 'decorate', =>( console.log('reordering method') ) ]

  decorate: (e) ->
  # ...

  reorder: (e) ->
  #  ...
```

# Usage with Rails 3

There's an [asset pipeline gem](http://github.com/simsalabim/backbone-view-enhanced-events-declaration-rails) for the mixin. 
Add `gem 'backbone-view-enhanced-events-declaration-rails', '~> 0.0.3'` to your application's Gemfile and then run `bundle`,
or install it yourself `gem install backbone-view-enhanced-events-declaration-rails`.

Afterwards, add the mixin script to your `application.coffee`

```coffeescript
#= require backbone
#= require backbone/backbone.view.enhanced_events_declaration
```

Author: Alexander Kaupanin
