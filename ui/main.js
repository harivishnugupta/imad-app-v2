
var button=document.getElementById('counter');
button.onclick = function()
{
    
var request= new XMLHttpRequest();


    request.onreadystatechange = fuction()
    {
        if (request.readystate === XMLHttpRequest.DONE)
        {
        if(request.status === 200)
        {
     var counting = request.responseText;
     var span = document.getElementById('count');
     span.innerHTML = counting.toString();  
    }
    }
    }
    request.open('GET', 'http://harivishnugupta.imad.hasura-app.io/' , true);
    request.send(null);
};
