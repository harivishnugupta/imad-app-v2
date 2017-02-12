console.log('Loaded!');
var change= document.getElementById('details');
change.innerHTML = 'changed value';
var moving = document.getElementById('toypic');
var marginLeft=0;
function movingright()
{
    marginLeft = marginLeft = 10;
    moving.style.marginLeft = marginLeft + 'px';
}
moving.onclick = function()
{
    var interval = setInterval(movingright,50);
 };
