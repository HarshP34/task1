const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');


myForm.addEventListener('submit',onSubmit);
function onSubmit(e)
{
    e.preventDefault();
    if(nameInput.value===''||emailInput.value==='')
    {
        msg.classList.add('error');
        msg.innerHTML="Please Enter All Fields";
        setTimeout(()=> msg.remove(),3000);
    }
    else
    {
       const myObj={
              name:nameInput.value,
              email:emailInput.value
        }
        let myObj_serialized=JSON.stringify(myObj);
    
     localStorage.setItem(myObj.email,myObj_serialized);
     let myObj_deserialized=JSON.parse(localStorage.getItem('myObj'));
     var li=document.createElement('li');
     li.appendChild(document.createTextNode(localStorage.getItem(myObj.email)));
     var deleteBtn=document.createElement('submit');
     deleteBtn.classList.add('btn');
     deleteBtn.style.backgroundColor='tomato';
     deleteBtn.style.width='100px';
     deleteBtn.style.height='50px';
     deleteBtn.appendChild(document.createTextNode('Delete'));
     li.appendChild(deleteBtn);
     var editBtn=document.createElement('btn');
     editBtn.classList.add('btn');
     editBtn.style.backgroundColor='gray';
     editBtn.style.width='100px';
     editBtn.style.height='50px';
     editBtn.appendChild(document.createTextNode('Edit'));
     li.appendChild(editBtn);
     userList.appendChild(li);
    }
}