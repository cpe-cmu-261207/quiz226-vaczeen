const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')


// define more constants and variables here

btn_toggle.onclick = () => {
  // your code here
  document.getElementById("toggle").click();
}
function search(){
  var str = "";
  var n=str.length.search(value)
  n.setAttribute("type","color");
  document.body.appendChild(n);
 
}
function reset(){
  var str="";
  var n=str.length.reset(value)
  n.setAttribute("type","reset");
  document.body.appendChild(n);
}
// more codes for Search and Reset buttons here
