document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let changeText = document.querySelector("#text");
    changeText.innerHTML = "This is really cool!"
  });
   
  console.log(
    "This fires when index.js loads - before DOMContentLoaded is triggered"
  );