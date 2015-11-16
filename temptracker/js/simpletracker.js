Parse.initialize(app_key, js_key);
var Tempdata = Parse.Object.extend("Tempdata");
var query = new Parse.Query(Tempdata);
query.descending("createdAt");
query.limit(720);
query.find({
  success: function(results) {
    var svg = dimple.newSvg("#chartContainer", "100%", "100%");
    var jsonArray = [];
    for(var i = 0; i < results.length; i++) {
       jsonArray.push(results[i].toJSON());
    }
    console.log(jsonArray);
    var chart = new dimple.chart(svg, jsonArray);
    var x = chart.addTimeAxis("x", "createdAt", "%Y-%m-%dT%H:%M:%S.%LZ", "%m/%d");
    var y = chart.addMeasureAxis("y", "tempC");
    var s = chart.addSeries("hvac_state", dimple.plot.area);
    s.interpolation = "cardinal";
    chart.draw();
    x.titleShape.text("Date");
    y.titleShape.text("Temperature");

    window.onresize = function () {
        chart.draw(0, true);
    };
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
