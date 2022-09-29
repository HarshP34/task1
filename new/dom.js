var form =document.getElementById('addForm');
var itemlist=document.getElementById('items');

//form submit event
form.addEventListener('submit',additem);
//delete event
itemlist.addEventListener('click',removeitem);
//add item
function additem(e)
{
    e.preventDefault();
    //get input value
    var newitem=document.getElementById('item').value;
    //create new li element
    var li=document.createElement('li');
    li.className='list-group-item';
   //add textnode 
   li.appendChild(document.createTextNode(newitem));
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



