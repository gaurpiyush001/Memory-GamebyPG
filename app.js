// console.log("hkv");
// document.querySelector('label-score');
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number..😍";
//
//
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 16;
//
//
// console.log(document.querySelector('.guess').value);
// document.querySelector('.number').textContent = 13;
var k = Math.floor(Math.random() * (20 - 1) + 1);
console.log(k);
var s = 20;
document.querySelector('.again').addEventListener('click', function(){
  document.querySelector('.number').textContent = '?';
  document.querySelector(".message").textContent = "Start Guessing The Number...";
  document.querySelector("body").style.backgroundColor = "#944e6c";
  k = (Math.floor(Math.random() * (20 - 1) + 1));
  console.log(k);
});
//var k = document.querySelector('.number').textContent;
document.querySelector('.check').addEventListener('click', function(){
  //console.log(document.querySelector('.guess').value);
  var g = Number(document.querySelector('.guess').value);
  if(s > 1 && g){
  if(k === g){
    document.querySelector(".message").textContent = "Correct Number..😍";
    document.querySelector('.number').textContent = k;
    if(document.querySelector(".highscore").textContent < document.querySelector(".score").textContent){
        document.querySelector(".highscore").textContent = document.querySelector(".score").textContent;
    }
    document.querySelector("body").style.backgroundColor = "green";
  //  k = (Math.floor(Math.random() * (20 - 1) + 1));
    //console.log(k);
  }

  else if(k > g){
    document.querySelector(".message").textContent = "Too Low..";
    //document.getElementsByTagName("body").style.backgroundColor = "red";
    s--;
    document.querySelector(".score").textContent = s;
  }
  else if(k < g){
    document.querySelector(".message").textContent = "Too High..";
    //document.getElementsByTagName("body").style.backgroundColor = "red";
    s--;
    document.querySelector(".score").textContent = s;
  }
}
else if(s <= 1 && g){
    document.querySelector(".message").textContent = "You Loose..";
    document.querySelector("body").style.backgroundColor = "red";
    s = 20;
    document.querySelector(".score").textContent = 20;
}
  else
    document.querySelector(".message").textContent = "No Number typed..";
});
