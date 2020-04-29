HTMLWidgets.widget({

  name: 'C3Gauge',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        var gaugeData = {data: 75}; 
  
        var chart1 = c3.generate({
          bindto: el,
          data: {
            json: x,
            type: 'gauge',
          },
          gauge: {
            min: 0,
            max: 100
          }
        });

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});