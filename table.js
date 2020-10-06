var drawTable = function(study) {
    var rows = d3.select("tbody")
    .selectAll("tr")
    .data(study)
    .enter()
    .append("tr")

    rows.append("td")
    .text(function(study){
        return study.study;
    })
    
    rows.append("td")
    .text(function(study){
        return study.year;
    })
    
    rows.append("td")
    .text(function(study){
        return study.size;
    })
    
    rows.append("td")
    .text(function(study){
        return study.reportedPercentage;
    })
}

var successFCN = function(study){
    console.log("Data retrieved", study);drawTable(study);
}

var failureFCN = function(error) {
    console.log("Cannot retrieve data", error);
}

var getStudiesData = d3.csv("otherStudies.csv")

getStudiesData.then(successFCN, failureFCN)