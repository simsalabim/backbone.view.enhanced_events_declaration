$(document).ready(function() {

  var view;

  module("Backbone.View", {

    setup: function() {
      view = new Backbone.View({
        id        : 'test-view',
        className : 'test-view',
        other     : 'non-special-option'
      });
    }

  });

  test("delegateEvents allows multiple whitespace-separated callbacks", 6, function() {
    var counter1 = 0, counter2 = 0;

    var view = new Backbone.View({el: '<p><a id="test"></a></p>'});
    view.increment = function(){ counter1++; };
    view.$el.on('click', function(){ counter2++; });

    var events = {'click #test': 'increment increment'};

    view.delegateEvents(events);
    view.$('#test').trigger('click');
    equal(counter1, 2);
    equal(counter2, 1);

    view.$('#test').trigger('click');
    equal(counter1, 4);
    equal(counter2, 2);

    view.delegateEvents(events);
    view.$('#test').trigger('click');
    equal(counter1, 6);
    equal(counter2, 3);
  });

  test("delegateEvents allows array of callbacks names", 6, function() {
    var counter1 = 0, counter2 = 0;

    var view = new Backbone.View({el: '<p><a id="test"></a></p>'});
    view.increment = function(){ counter1++; };
    view.$el.on('click', function(){ counter2++; });

    var events = {'click #test': ['increment', 'increment'] };

    view.delegateEvents(events);
    view.$('#test').trigger('click');
    equal(counter1, 2);
    equal(counter2, 1);

    view.$('#test').trigger('click');
    equal(counter1, 4);
    equal(counter2, 2);

    view.delegateEvents(events);
    view.$('#test').trigger('click');
    equal(counter1, 6);
    equal(counter2, 3);
  });
  
  test("delegateEvents allows array of mixed callbacks names with plain functions", 6, function() {
    var counter1 = 0, counter2 = 0;

    var view = new Backbone.View({el: '<p><a id="test"></a></p>'});
    view.increment = function(){ counter1++; };
    view.$el.on('click', function(){ counter2++; });

    var events = {'click #test': ['increment', function(){counter1++;}] };

    view.delegateEvents(events);
    view.$('#test').trigger('click');
    equal(counter1, 2);
    equal(counter2, 1);

    view.$('#test').trigger('click');
    equal(counter1, 4);
    equal(counter2, 2);

    view.delegateEvents(events);
    view.$('#test').trigger('click');
    equal(counter1, 6);
    equal(counter2, 3);
  });  
});
