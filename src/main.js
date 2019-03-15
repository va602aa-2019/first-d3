const d3 = require("d3");

let numbers = [5, 10, 15];

d3.select("#app")
  .append("h1")
  .text("My First d3.js application");

const ul = d3.select("#app").append("ul");
const svg = d3.select('#viz')
  .append('svg')
  .attr('width', 600)
  .attr('height', 300);

function redraw() {
  let lis = ul.selectAll("li").data(numbers);

  // exit
  lis.exit().remove();

  //enter
  lis = lis
    .enter()
    .append("li")
    .merge(lis);

  //update
  // lis.text('Element number is');
  // lis.text(function(d,i){ return 'Element number is '+d  });
  lis.text((d, i) => "Element number is " + d);
}

function svgRedraw(){
  let lines = svg.selectAll('line').data(numbers);

  //exit
  lines.exit().remove();

  //enter
  lines = lines.enter()
    .append('line')
    .attr('stroke-width', 1)
    .attr('stroke', 'red')
    .merge(lines);

  //update
  lines
    .attr('x1', 10)
    .attr('y1', (d,i) => (10 + i * 10) )
    .attr('x2', (d,i) => 10 + d)
    .attr('y2', (d,i) => (10 + i * 10));
}


d3.select("#btnAdd").on("click", function() {
  console.log("Add a number");
  const n = Math.floor(Math.random()*100);
  numbers.push(n);
  redraw();
  svgRedraw();
});

d3.select("#btnRemove").on("click", function() {
  console.log("Remove a number");
  numbers = numbers.slice(1);
  redraw();
  svgRedraw();
});


redraw();
svgRedraw();
