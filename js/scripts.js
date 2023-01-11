

window.onload = function() {
  let textSize = 20;
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
   
    const text = document.getElementById("Input").value;
    textSize = textSize * 1.1;
    document.querySelector("span#textInput").style.fontSize = textSize + "px";
    document.querySelector("span#textInput").innerText = text.toUpperCase();

    document.querySelector("div#text").removeAttribute("class");
  
  };
  
};

