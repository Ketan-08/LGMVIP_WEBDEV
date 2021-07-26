var i=1;

function show()
{
    document.getElementById('vid'+i).style.display="flex";
}

function moveLeft()
{
    if(i==1)
    {
        document.getElementById('vid'+i).style.display="none";
        i=4;
        document.getElementById('vid'+i).style.display="flex";
    }
    else{
        document.getElementById('vid'+(i)).style.display="none";
        i--;
        document.getElementById('vid'+i).style.display="flex";
    }
}
function moveRight()
{
    
    if(i==4)
    {
        document.getElementById('vid'+(i)).style.display="none";
        i=1;
        document.getElementById('vid'+i).style.display="flex";
        return;
    }
    else{
    document.getElementById('vid'+(i)).style.display="none";
    i++;
    document.getElementById('vid'+(i)).style.display="flex";
    }
}

function display(id){
    console.log(id)
    x=document.getElementById("display");

    if(id=='life1')
    {
        document.getElementById("display").src="life1.jfif"
    }
    if(id=='life2')
    {
        document.getElementById("display").src="life2.jfif"
    }
    if(id=='life3')
    {
        document.getElementById("display").src="life3.jfif"
    }
    if(id=='life4')
    {
        document.getElementById("display").src="life4.jfif"
    }
    if(id=='life5')
    {
        document.getElementById("display").src="life5.jfif"
    }
    if(id=='life6')
    {
        document.getElementById("display").src="life6.jfif"
    }
    if(id=='life7')
    {
        document.getElementById("display").src="life7.jfif"
    }
   

}