document.body.addEventListener('keyup', function(event) {
    ob=document.getElementsByClassName("number");
    numStr=ob[0].textContent.toLowerCase();
    num=parseInt(numStr);

    if (event.keyCode==37)
    {
        prev=num-1;
        prevStrRaw=prev.toString();
        if (num==1)
        {
            window.location.href="151.html";
        }
        else if(prev<10)
        {
            prevStr="00"+prevStrRaw+".html";
        }
        else if(prev>=10 && prev<100)
        {
            prevStr="0"+prevStrRaw+".html";
        }  
        else
        {
            prevStr=prevStrRaw+".html";
        }  
        window.location.href=prevStr;
    }
    
    else if (event.keyCode==39)
    {
        next=num+1;
        nextStrRaw=next.toString();
        if (num==151)
        {
            window.location.href="001.html";
        }
        else if(next<10)
        {
            nextStr="00"+nextStrRaw+".html";
        }
        else if(next>=10 && next<100)
        {
            nextStr="0"+nextStrRaw+".html";
        }    
        else
        {
            nextStr=nextStrRaw+".html";
        }
        window.location.href=nextStr;
    }
});