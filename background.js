chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
       /* case "monitor":
            superPower();
            break;
            */
        case "notify":
            makeAJAXCall(request.message);
            break;
    }
    return true;
});



var makeAJAXCall = function(message){
    console.log("Varsha. The message is"+message);
    makeAjaxcall(message);
   // superPower();
}

var superPower = function() {
    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.sendMessage(tab.id, {type: "monitor"});
    });
}

var makeAjaxcall= function(action)
        {
            $.ajax({
              type: "POST",
              url: "http://localhost:8091/AdaptiveWebAssignment1/MonitorServlet",
              data: {"action":action},
              dataType: "json"
          });
        }