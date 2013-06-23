// Cached regex to split keys for `delegate`.
var delegateEventSplitter = /^(\S+)\s*(.*)$/;

(function() {

  _.extend(Backbone.View.prototype, {
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        eventName += '.delegateEvents' + this.cid;

        if (_.isFunction(method)) {
          this.bindMethod(method, eventName, selector);
        } else if (_.isArray(method)) {
          method = _.compact(method);
          for (var i in method) {
            if (_.isFunction(method[i])) {
              this.bindMethod(method[i], eventName, selector);
            } else {
              if (!this[method[i]]) continue;
              this.bindMethod(this[method[i]], eventName, selector);
            }
          }
        } else {
          method = _.compact(method.match(delegateEventSplitter));
          method.shift();
          for (var i in method) {
            if (!this[method[i]]) continue;
            this.bindMethod(this[method[i]], eventName, selector);
          }
        }
      }
      return this;
    },

    // Binds a method to an event in context of selector (if present non-empty string)
    bindMethod: function(method, eventName, selector) {
      method = _.bind(method, this);
      if (selector === '') {
        this.$el.on(eventName, method);
      } else {
        this.$el.on(eventName, selector, method);
      }
    }
  });

})();
