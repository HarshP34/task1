var seconditem=document.querySelector(".list-group-item:nth-child(2)");
seconditem.style.background="green";
var thirditem=document.querySelector(".list-group-item:nth-child(3)");
thirditem.style.color="white";
var items=document.querySelectorAll(".list-group-item");
console.log(items);
items[1].style.color="green";
var odd=document.querySelectorAll(".list-group-item:nth-child(odd)");
for(var i=0;i<odd.length;i++)
{
    odd[i].style.background="green";
}


