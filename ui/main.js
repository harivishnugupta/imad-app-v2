console.log('Loaded!');
var change= document.getElementById('details');
change.innerHTML = 'changed value';
var moving = document.getElementById('toypic');
var marginLeft=0;
function movingRight()
{
    marginLeft = marginLeft + 10;
    moving.style.marginLeft = marginLeft + 'px';
}
moving.onclick = function()
{
    var interval = setInterval(movingRight, 50);
 };
var counter=document.getElementById('count');
counter.onclick = function()
{
  var counting=0;
     counting+=1;
     return counting;  
}
