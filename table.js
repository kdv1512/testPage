var otherStudies = [
{
    study: "Lambda Legal & Deloitte Financial Advisory Services LLP", 
    year: 2005, 
    size: "LGBT employees in the US (1205)", 
    reportedPercentage: "39%, over five-year period"
},
{
    study: "Transgender Law Center",
    year: 2005,
    size: "Transgender people in California (646)",
    reportedPercentage:"70%, over lifetime"
},
{
    study: "Grant, J. et al.",
    year: "2008-2009",
    size: "Transgender people in the US (6450)",
    reportedPercentage: "78% experienced at least one form of mistreatment or harassment; 47% discriminated against in hiring, promotion, or job retention"
},
{
    study: "Herman, J.",
    year: "2008-2009",
    size: "Transgender employees in Massachusetts",
    reportedPercentage: "76%, over lifetime"
},
{
    study: "Out & Equal",
    year: 2009,
    size: "LGBT employees in the US (238)",
    reportedPercentage: "44%, over lifetime"
},
{
    study: "Rankin, S. et al.",
    year: 2010,
    size: "LGBT faculty and staff in the US (1902)",
    reportedPercentage: "19%, over one-year period"
},
{
    study: "One Colorado",
    year: 2010,
    size: "LGBT people in Colorado (4600)",
    reportedPercentage: "27%, over lifetime (for those identifying as gays/lesbians only)"
},
{
    study: "One Colorado",
    year: 2010,
    size: "LGBT people in Colorado (4600)",
    reportedPercentage: "52%, over lifetime (for transgendered people only)"
},
{
    study: "SC Equality",
    year: 2010,
    size: "LGBT employees in South Carolina (1000+)",
    reportedPercentage: "30%, over lifetime"
},
{
    study: "Rosky, C. et al.",
    year: 2010,
    size: "LGBT employees in Utah (931)",
    reportedPercentage: "43%, over lifetime"
},
{
    study: "Rosky, C. et al.", 
    year: 2010,
    size: "Transgendered employees in Utah (27)", 
    reportedPercentage: "67%, over lifetime"}
]

var drawTable = function(otherStudies) {
    var rows = d3.select("tbody")
    .selectAll("tr")
    .data(otherStudies)
    .enter()
    .append("tr")

    rows.append("td")
    .text(function(otherStudies){
        return otherStudies.study;
    })
    
    rows.append("td")
    .text(function(otherStudies){
        return otherStudies.year;
    })
    
    rows.append("td")
    .text(function(otherStudies){
        return otherStudies.size;
    })
    
    rows.append("td")
    .text(function(otherStudies){
        return otherStudies.reportedPercentage;
    })
}

drawTable(otherStudies)
