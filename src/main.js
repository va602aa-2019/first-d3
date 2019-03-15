const d3 = require("d3");

let numbers = [5, 10, 15];

d3.select("#app")
  .append("h1")
  .text("My First d3.js application");

const ul = d3.select("#app").append("ul");

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

d3.select("#btnAdd").on("click", function() {
  console.log("Add a number");
  const n = Math.floor(Math.random()*100);
  numbers.push(n);
  redraw();
});

d3.select("#btnRemove").on("click", function() {
  console.log("Remove a number");
  numbers = numbers.slice(1);
  redraw();
});


redraw();
