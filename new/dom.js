var items=document.getElementsByClassName("list-group-item");
console.log(items);
items[2].style.background="Green";
for(var i=0;i<items.length;i++)
{
  items[i].style.fontWeight="bold";
}


var li=document.getElementsByTagName("li");
console.log(li);
for(var i=0;i<li.length;i++)
{
  li[i].style.background="gray";
}



