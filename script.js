// Page Scripts
var action;

$(".aside-cta").click(function(){
    console.log("You just posted a question!!");
    action="Post";
    chrome.extension.sendMessage({
      type: "notify", message:action
  });

});


$(".comments-link").click(function(){
    console.log("You just commented something!");
    action="Comment";
    chrome.extension.sendMessage({
      type: "notify", message:action
  });

});


$(".star-off").click(function(){
    if($(this).hasClass("star-on")==false){
      console.log("You just favourited a question!");
      action="Favourite";
      chrome.extension.sendMessage({
        type: "notify", message:action
    });
  }
});


$("#search").change(function(){
    console.log("You are searching for something!");
    action="Search";
    chrome.extension.sendMessage({
      type: "notify", message:action
  });

});



var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
     if (st > lastScrollTop){
       console.log("You scrolled Down");

       action="Scroll";
       chrome.extension.sendMessage({
        type: "notify", message:action
    });
   } else {

       console.log("You scrolled Up");
       action="Scroll";
       chrome.extension.sendMessage({
        type: "notify", message:action
    });
   }
   lastScrollTop = st;
}, false);
