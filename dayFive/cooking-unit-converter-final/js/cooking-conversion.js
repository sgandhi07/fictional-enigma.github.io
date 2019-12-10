var measurements = ["tablespoons", "cups", "pints", "quarts", "gallons", "milliliters", "liters"];


//populate the select button
window.onload = function(){
  var select = document.querySelectorAll("select");

  for (var i = 0; i < select.length; i++) {
    for (var j = 0; j < measurements.length; j++) {
      var options = document.createElement("option");
      options.textContent = measurements[j];
      select[i].appendChild(options);
    };
  };
};


var measurementsTable = {
  "tablespoons": {
    "to_tablespoons": function(val) { return val * 1 },
    "to_teaspoons":   function(val) { return val * 3 },
    "to_cups":        function(val) { return val * 0.0625 },
    "to_pints":       function(val) { return val * 0.03125 },
    "to_quarts":      function(val) { return val * 0.015625 },
    "to_gallons":     function(val) { return val * 0.00390625 },
    "to_milliliters": function(val) { return val * 14.7868 },
    "to_liters":      function(val) { return val * 0.0147868 }
  },
  "teaspoons": {
    "to_tablespoons": function(val) { return val * 0.333333 },
    "to_teaspoons":   function(val) { return val * 1 },
    "to_cups":        function(val) { return val * 0.0208333 },
    "to_pints":       function(val) { return val * 0.0104167 },
    "to_quarts":      function(val) { return val * 0.00520833 },
    "to_gallons":     function(val) { return val * 0.00130208 },
    "to_milliliters": function(val) { return val * 4.92892 },
    "to_liters":      function(val) { return val * 0.00492892 }
  },
  "cups": {
    "to_tablespoons": function(val) { return val * 16 },
    "to_teaspoons":   function(val)  { return val * 48 },
    "to_cups":        function(val) { return val * 1 },
    "to_pints":       function(val) { return val * 0.5 },
    "to_quarts":      function(val) { return val * 0.25 },
    "to_gallons":     function(val) {return val * 0.0625 },
    "to_milliliters": function(val) {return val * 236.588 },
    "to_liters":      function(val) { return val * 0.236588 }
  },
  "pints": {
    "to_tablespoons": function(val) { return val * 32 },
    "to_teaspoons":   function(val)  { return val * 96 },
    "to_cups":        function(val) { return val * 2 },
    "to_pints":       function(val) { return val * 1 },
    "to_quarts":      function(val) { return val * 0.5 },
    "to_gallons":     function(val) {return val * 0.125 },
    "to_milliliters": function(val) {return val * 473.176 },
    "to_liters":      function(val) { return val * 0.473176 }
  },
  "quarts": {
    "to_tablespoons": function(val) { return val * 64 },
    "to_teaspoons":   function(val)  { return val * 192 },
    "to_cups":        function(val) { return val * 4 },
    "to_pints":       function(val) { return val * 2 },
    "to_quarts":      function(val) { return val * 1 },
    "to_gallons":     function(val) {return val * 0.25 },
    "to_milliliters": function(val) {return val * 946.353 },
    "to_liters":      function(val) { return val * 0.946353 }
  },
  "gallons": {
    "to_tablespoons": function(val) { return val * 256 },
    "to_teaspoons":   function(val)  { return val * 768 },
    "to_cups":        function(val) { return val * 16 },
    "to_pints":       function(val) { return val * 8 },
    "to_quarts":      function(val) { return val * 4 },
    "to_gallons":     function(val) {return val * 1 },
    "to_milliliters": function(val) {return val * 3785.41 },
    "to_liters":      function(val) { return val * 3.78541 }
  },
  "milliliters": {
    "to_tablespoons": function(val) { return val * 0.067628 },
    "to_teaspoons":   function(val)  { return val * 0.202884 },
    "to_cups":        function(val) { return val * 0.00422675 },
    "to_pints":       function(val) { return val * 0.00211338 },
    "to_quarts":      function(val) { return val * 0.00105669 },
    "to_gallons":     function(val) {return val * 0.000264172 },
    "to_milliliters": function(val) {return val * 1 },
    "to_liters":      function(val) { return val * 0.001 }
  },
  "liters": {
    "to_tablespoons": function(val) { return val * 67.628 },
    "to_teaspoons":   function(val)  { return val * 202.884 },
    "to_cups":        function(val) { return val * 4.22675 },
    "to_pints":       function(val) { return val * 2.11338 },
    "to_quarts":      function(val) { return val * 1.05669 },
    "to_gallons":     function(val) {return val * 0.264172 },
    "to_milliliters": function(val) {return val * 1000 },
    "to_liters":      function(val) { return val * 1 }
  }
};

var changeAmount = function(event) {
  convertUnits(event.target);
};

var changeUnit = function(event) {
  var input = document.getElementById("cu-input-1");
  convertUnits(input);
};

function convertUnits(input) {
  var value = input.value;

  var unit = input.getAttribute("data-unit");
  var fromUnits = document.getElementById(unit).value;


  var targetSelect = input.getAttribute("data-target-select");
  var toUnits = document.getElementById(targetSelect).value;
  var targetInput = input.getAttribute("data-target");

  var answer = measurementsTable[fromUnits]["to_" + toUnits](value);
  
 document.getElementById(targetInput).value = answer;
  
};














