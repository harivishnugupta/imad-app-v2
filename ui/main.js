console.log('Loaded!');
var change= document.getElementById('details');
change.innerHTML = 'changed value';
var moving = document.getElementById('toypic');
moving.onclick = function()
{
    moving.style.marginLeft = '200px';
 };
