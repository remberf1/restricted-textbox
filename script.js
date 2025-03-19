var TextCount =document.getElementById("charCount");
var updateTextCount=0;
console.log(updateTextCount);
// var outline=document.getElementById("myText");
var counterColor=document.querySelectorAll(".counter");


function updateCount(){
    updateTextCount= myText.value.length;
    TextCount.innerHTML=updateTextCount;
};
function stopTyping(){
    var myText=document.getElementById("myText");
    var updateTextCount= myText.value.length;
    if(updateTextCount>=250){
        myText.value=myText.value.substring(0,249);
    }
    if(updateTextCount>=250){ 
        myText.classList.add("max-length");
        counterColor.forEach(function(counter) {
            counter.style.color = "red";
        });

    }else{
        myText.classList.remove("max-length");
        // myText.style.borderColor = "black";
        counterColor.forEach(function(counter) {
            counter.style.color = "black"; 
          });
    }
};

document.getElementById("myText").addEventListener("input", function(e) {
    updateCount();
    stopTyping();
  });

  
  document.getElementById("myText").addEventListener("paste", function(e) {
    var myText = document.getElementById("myText");
    
    setTimeout(function() {
      if (myText.value.length > 249) {
        myText.value = myText.value.substring(0, 249);
      }
      updateCount();
      stopTyping();
    }, 0);
  });