var form =document.getElementById('addForm');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter');

//form submit event
form.addEventListener('submit',additem);
//delete event
itemlist.addEventListener('click',removeitem);
//filter event
filter.addEventListener('keyup',filteritems);
//add item
function additem(e)
{
    e.preventDefault();
    //get input value
    var newitem=document.querySelectorAll('#item')[0].value;
    var newitem1=document.querySelectorAll('#item')[1].value;
    //create new li element
    var li=document.createElement('li');
    li.className='list-group-item'; 
   //add textnode 
   li.appendChild(document.createTextNode(`${newitem} ${newitem1}`));
   //create delete button
   var deleteBtn=document.createElement('button');
   //add classes
   deleteBtn.className='btn btn-danger btn-sm float-right delete';
   //textnode
   deleteBtn.appendChild(document.createTextNode('X'));
   li.appendChild(deleteBtn);
   var editBtn=document.createElement('button');
   //edit button
   editBtn.className='btn btn- btn-sm float-right edit';
   editBtn.appendChild(document.createTextNode('edit'));
   li.appendChild(editBtn);
   itemlist.appendChild(li);
}
function removeitem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you Sure?'))
        {
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}
//filter items
function filteritems(e)
{
    var text=e.target.value.toLowerCase();
    var items=itemlist.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemname=item.firstChild.textContent;
        if(itemname.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}