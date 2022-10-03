const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const userList=document.querySelector('#users');


myForm.addEventListener('submit',onSubmit);
function onSubmit(e)
{
    e.preventDefault();
    if(nameInput.value===''||emailInput.value==='')
    {
        alert('Please fill all fields')
    }
    else
    {
      if(localStorage.getItem(emailInput.value))
        {
        for(var i=0;i<document.querySelectorAll('.item').length;i++)
        {
          if(document.querySelectorAll('.item')[i].innerHTML.indexOf(emailInput.value)!=-1)
          document.querySelectorAll('.item')[i].remove();
        }
        }
       const myObj={
              name:nameInput.value,
              email:emailInput.value
        }
      let myObj_serialized=JSON.stringify(myObj);
     localStorage.setItem(myObj.email,myObj_serialized);
     let myObj_deserialized=JSON.parse(localStorage.getItem(myObj.email));
     var li=document.createElement('li');
     li.className='item';
     li.appendChild(document.createTextNode(localStorage.getItem(myObj.email)));
     var deleteBtn=document.createElement('button');
     deleteBtn.className='btn';
     deleteBtn.style.background='tomato';
     deleteBtn.style.color='white';
     deleteBtn.style.width='100px';
     deleteBtn.style.height='50px';
     deleteBtn.appendChild(document.createTextNode('delete'));
     li.appendChild(deleteBtn);
     var editBtn=document.createElement('button');
     editBtn.className='btn';
     editBtn.style.background='skyblue';
     editBtn.style.width='100px';
     editBtn.style.height='50px';
     editBtn.appendChild(document.createTextNode('edit'));
     li.appendChild(editBtn);
     userList.appendChild(li);
    }
    userList.addEventListener('click',deleteItem);
    function deleteItem(e)
    {
        if(e.target==deleteBtn)
        {
            if(confirm('Are you Sure?'))
        {
            var li=e.target.parentElement;
         for(var i=0;i<document.querySelectorAll('.item').length;i++)
         {
            if(li==document.querySelectorAll('.item')[i])
            {
              myObj_deserialized2=JSON.parse(document.querySelectorAll('.item')[i].firstChild.textContent)
              localStorage.removeItem(myObj_deserialized2.email);
              myForm.querySelector('#name').value='';
              myForm.querySelector('#email').value='';
            }
         }
         userList.removeChild(li);
        }
        }
    }
    userList.addEventListener('click',editItem);
    function editItem(e)
    {
        if(e.target==editBtn)
        {
           var  li=e.target.parentElement;
          for(var i=0;i<document.querySelectorAll('.item').length;i++)
          {
            if(li==document.querySelectorAll('.item')[i]){
           var myObj_deserialized1=JSON.parse(document.querySelectorAll('.item')[i].firstChild.textContent)
            myForm.querySelector('#name').value=myObj_deserialized1.name;
            myForm.querySelector('#email').value=myObj_deserialized1.email;
            localStorage.removeItem(myObj_deserialized1.email);
            }
          }
            userList.removeChild(li);
         }
        }
}
