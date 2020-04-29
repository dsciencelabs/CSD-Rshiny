$(document).ready(function(){
  
    /* As dashboardHeader and dashboardSidebar are automatically generated, intro.js
    attributes must be added after the page has loaded, for body elements these could
    be added within the UI instead */
  
    // add intro js attributes to elements after dom load
    
    // header 
    $(".logo").attr("data-intro", "Welcome to the Customer Satisfaction Dashboard. This dashboard is designed to provide useful insight into customer demand and key performance indicators.<br><br>As a software company focused on advertising, these analytics will help us to understand where improvements are required in our support function.").attr("data-step", "1");
  
    // main body
    $(".content").attr("data-intro", "The main performance indicators are displayed in this section. These include: <ul><li>Current customer satisfaction</li><li>Customer issue breakdown</li><li>Customer issue volume by location</li><li>Biggest pain points</li><li>Demand trends</li></ul>").attr("data-step", "2");
    
    // time to close
    $("#value1").attr("data-intro", "This is our average time taken (in hours) to close service request tickets and deploy a solution to a customer.").attr("data-step", "3");
    
    // monthly service requests
    $("#value2").attr("data-intro", "This is our average amount of service requests per month.").attr("data-step", "4");
    
    // product quality
    $("#value3").attr("data-intro", "This is our average score on product quality (how well our software products perform) taken from our customer survey. 9 was the highest possible score.").attr("data-step", "5");
  
    // overall quality
    $("#value4").attr("data-intro", "This is our average overall satisfaction score taken from our customer survey. 9 was the highest possible score.").attr("data-step", "6");
    
    // major issues
    $("#box1").parent().attr("data-intro", "These are the top 10 customer issues and represent our biggest pain points.").attr("data-step", "7");
    
    // channel type
    $("#box2").parent().attr("data-intro", "These are our customer service requests split up by channel type.").attr("data-step", "8");
    
    // time to close demand trend
    $("#box3").parent().attr("data-intro", "This is our daily total service requests vs speed of closing over time, this helps to understand demand and foresee problems").attr("data-step", "9");
    
    // customer map
    var sidebar = $(".sidebar-menu").children();
    $(sidebar[1]).attr("data-intro", "Here you can view our customer demand on a map.").attr("data-step", "10");
    
    // filter
    $(sidebar[2]).attr("data-intro", "Here you can filter the data by Support Center A, B, C or D for comparison.").attr("data-step", "11");
    
    // raw data
    $(sidebar[3]).attr("data-intro", "Here you can download the raw data - our requests for service log (200,000 rows) and our survey responses (7000 rows). This file is 9.5MB in size.").attr("data-step", "12");
    
    // source code
    $(sidebar[4]).attr("data-intro", "Finally, for those interested in how this app was built, the source code is available to view. Please feel free to email suggestsions / improvements.<br><br>This app was created based upon an assignment for the MPP in Data Science. More information can be found <a href=\"https://www.edx.org/course/analytics-storytelling-for-impact-2\" target=_blank>here</a>.").attr("data-step", "13");
    
    
    // on click start intro js welcome
    $("#help").click(function() {
      introJs().start();
    });
    
    // handle custom messages for chart output
    function issuesJSON(message) {
      console.log(message);    
    }
  
    // issues is the session message identifier
    Shiny.addCustomMessageHandler("issues", issuesJSON);
    
});