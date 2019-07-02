import * as d3 from 'd3';
var jsonData = require('../json/flare.json');

//const createLineChart = data => {

    var node = document.createElement('div');

    var diameter = 960,
        format = d3.format(",d"),
        color = d3.scale.category20c();
    
    var bubble = d3.layout.pack()
        .sort(null)
        .size([diameter, diameter])
        .padding(1.5);
        
    var svg = d3.select(node).append("svg")
        .attr("width", diameter)
        .attr("height", diameter)
        .attr("class", "bubble");
    
    d3.json("json/flare.json", function(error, root) {
      if (error) throw error;
    
    var bubbles = svg.selectAll(".node")
        .data(bubble.nodes(classes(root))
        .filter(function(d) { return !d.children; }))
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    
})
//}

function classes(root) {
    var classes = [];
  
    function recurse(name, node) {
      if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
      else classes.push({packageName: name, className: node.name, value: node.size});
    }
  
    recurse(null, root);
    return {children: classes};
  }

export default node;