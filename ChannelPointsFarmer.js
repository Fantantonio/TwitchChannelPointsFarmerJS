var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

var intervalId = window.setInterval(function() {
  $("svg").children("g").children('path').each(function () {
    if ($(this).attr('d') == "M16.503 3.257L18 7v11H2V7l1.497-3.743A2 2 0 015.354 2h9.292a2 2 0 011.857 1.257zM5.354 4h9.292l1.2 3H4.154l1.2-3zM4 9v7h12V9h-3v4H7V9H4zm7 0v2H9V9h2z") {
      console.log("new present"); $(this).parent().parent().parent().click();
    }
  });
  console.log("looping");
}, 5000);
