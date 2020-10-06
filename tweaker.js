var drawStack = function(lgbt)
{
    var stack = d3.select(".graph1")
    .selectAll("g")
    .data(lgbt)
    .enter()
    .append("g")
    .stack()
    .keys(["Heterosexual", "Bisexual", "Gay/Lesbian", "Other", "Prefer Not to Answer"]);
    
    var series = stack(data);    
    
}

var makeTranslateString = function(x,y)
{
    return "translate("+x+","+y+")";
}


var drawAxes = function(graph,margins,
                         xScale,yScale)
{
   var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);
    
    d3.select(".graph1")
    .append("g")
    .classed("axis", true)
    .attr("transform", makeTranslateString(margins.left, margins.top+graph.height))
    .call(xAxis)
    
    d3.select("svg")
    .append("g")
    .classed("axis",true)
    .attr("transform", makeTranslateString(margins.left, 
             margins.top))
    .call(yAxis)
 
}

var drawLabels = function(graph,margins)
{
    var labels = d3.select(".graph1")
    .append("g")
    .classed("labels", true)
    
    labels.append("text")
    .text("Penguin Quiz Grades")
    .classed("title", true)
    .attr("text-anchor", "middle")
    .attr("x", margins.left+(graph.width/2))
    .attr("y", margins.top-20)
    
    labels.append("text")
    .text("Day")
    .classed("label", true)
    .attr("text-anchor", "middle")
    .attr("x", margins.left+(graph.width/2))
    .attr("y", 590)
    
    labels.append("g")
    .attr("transform", makeTranslateString(20, margins.top+(graph.height/2)))
    .append("text")
    .text("Grade")
    .classed("label",true)
    .attr("text-anchor","middle")
    .attr("transform", "rotate(90)")
}

var initGraph = function(lgbt)
{
    //size of screen
    var screen = {width:900,height:600}
    //how much space on each side
    var margins = {left:55,right:20,top:40,bottom:40}
    
    
    
    var graph = 
        {
            width:screen.width-margins.left-margins.right,
            height:screen.height - margins.top-margins.bottom-10
        }
    console.log(graph);
    
    d3.select(".graph1")
    .attr("width",screen.width)
    .attr("height",screen.height)
    
    var target = d3.select(".graph1")
    .append("g")
    .attr("id","graph")
    .attr("transform",
          "translate("+margins.left+","+
                        margins.top+")");
    
    
    var xScale = d3.scaleLinear()
        .domain([0,100])
        .range([0,graph.width])

    var yScale = d3.scaleLinear()
        .domain([0,1])
        .range([graph.height,0])
    
    drawAxes(graph,margins,xScale,yScale);
    drawStack(lgbt,target,xScale,yScale);
    drawLabels(graph,margins);
   
}


var successFCN = function(lgbt)
{
    console.log("Data retrieved",lgbt);
    initGraph(lgbt);
}

var failFCN = function(error)
{
    console.log("error",error);
}

var getData = d3.csv("filtereddata.csv");
getData.then(successFCN,failFCN);


