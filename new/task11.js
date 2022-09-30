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
    
     localStorage.setItem('myObj',myObj_serialized);
     let myObj_deserialized=JSON.parse(localStorage.getItem('myObj'));
     console.log(myObj_deserialized);
    
    }
}