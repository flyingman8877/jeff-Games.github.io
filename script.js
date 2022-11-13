var urlObj = new window.URL(window.location.href);
var url = "https://xlegends.github.io/susimposter/";

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "yesssssssssss") {
    win = window.open();
                win.document.body.style.margin = '0';
                win.document.body.style.height = '100vh';
                var iframe = win.document.createElement('iframe');
                iframe.style.border = 'none';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.margin = '0';
                iframe.src = url;
                win.document.body.appendChild(iframe);
  }
  else{
    alert("you have fail");
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }
    
  
