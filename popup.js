// Popup

window.onload = function() {
   
        chrome.extension.sendMessage({
            type: "monitor"
        });
  
}