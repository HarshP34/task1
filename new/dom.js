//create a child
var itemlist=document.querySelector('#items');
console.log(itemlist.parentNode);
//lastchild
console.log(itemlist.lastChild);
//lastElementchild
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.style.color="red";
//firstchild
console.log(itemlist.firstChild);
//firstelementchild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.style.color="blue";
itemlist.firstElementChild.textContent="Blue";
//nextsibling
console.log(itemlist.nextSibling);
//nextelementsibling
console.log(itemlist.nextElementSibling);
//previoussibling
console.log(itemlist.previousSibling);
//previouselementsibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color="green";
//create element
//create div
var newDiv=document.createElement('div');
//add class
newDiv.className='hello';
//add id
newDiv.id='hello1';
// set attributes
newDiv.setAttribute('title','Hello Div');
//create a textnode
var newDivtext=document.createTextNode('Hello World');
// add text a div
newDiv.appendChild(newDivtext);
console.log(newDiv);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);
var a=document.querySelector('body .list-group');
var b=document.querySelector('body .list-group-item');
a.insertBefore(newDiv,b);
newDiv.style.color="black";





