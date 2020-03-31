// Import stylesheets
import './style.css';

 var visualization = d3plus.viz()
 .container("#viz")
 .data([{"dia": "lunes", "value": 13.6,"col":"#5ba4cf","pos":1},{"dia": "martes", "value": 14.2,"col":"#298fca","pos":2},{"dia": "miércoles", "value": 17.8,"col":"#0079bf","pos":3},{"dia": "jueves", "value": 27.2,"col":"#055a8c","pos":4},{"dia": "viernes", "value": 22.5,"col":"#026acf","pos":5},{"dia": "sábado", "value": 4.1,"col":"#8bbdd9","pos":6},{"dia": "domingo", "value": 0.6,"col":"#bcd9ea","pos":7}])
 .type("pie")
 .id("dia")
 .size("value")
 .color("col")
 .legend(false)
 .order({sort: 'asc' })
 .draw()