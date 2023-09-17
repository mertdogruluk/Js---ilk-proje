function incrementFunction(){
   const element = document.getElementById("distraction-time");
   let value = element.innerHTML;
   
   ++value;
    console.log("button clicked");
    console.log(value);
    document.getElementById("distraction-time").innerHTML = value;
}