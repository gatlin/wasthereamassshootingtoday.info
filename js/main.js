twttr.events.bind(
  'loaded',
  function(event) {
      event.widgets.forEach(function(widget) {
          console.log("Created widget: " + widget.id);
      });
  }
);
