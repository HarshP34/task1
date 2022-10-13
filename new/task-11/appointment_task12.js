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
       const myObj={
              name:nameInput.value,
              email:emailInput.value
        }
      let myObj_serialized=JSON.stringify(myObj);
    // localStorage.setItem(myObj.email,myObj_serialized);
    axios.post("https://crudcrud.com/api/a70a2badbb04441c89ac596a01906f9e/appointmentdata",myObj).then((response)=>
    {
      //console.log(response);
      shownonScreen(response.data);
    }).catch((err)=>{
      document.body.innerHTML+='<h4>Something Went Wrong</h4>'
      console.log(err)});
    // let myObj_deserialized=JSON.parse(localStorage.getItem(myObj.email));  
}
}
function shownonScreen(data)
{
 var li=document.createElement('li');
 li.className='item';
 li.appendChild(document.createTextNode(`${data.name}-${data.email}`));
 var deleteBtn=document.createElement('button');
 deleteBtn.className='btn';
 deleteBtn.appendChild(document.createTextNode('delete'));
 li.appendChild(deleteBtn);
 var editBtn=document.createElement('button');
 editBtn.className='btn';
 editBtn.appendChild(document.createTextNode('edit'));
 li.appendChild(editBtn);
 userList.appendChild(li);


 userList.addEventListener('click',deleteItem);
 function deleteItem(e)
 {
     if(e.target==deleteBtn)
     {
         if(confirm('Are you Sure?'))
     {
         var li=e.target.parentElement;
    //   for(var i=0;i<document.querySelectorAll('.item').length;i++)
    //   {
    //      if(li==document.querySelectorAll('.item')[i])
    //      {
    //        myObj_deserialized2=JSON.parse(document.querySelectorAll('.item')[i].firstChild.textContent)
    //        localStorage.removeItem(myObj_deserialized2.email);
    //        myForm.querySelector('#name').value='';
    //        myForm.querySelector('#email').value='';
    //      }
    //   }
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
    //    for(var i=0;i<document.querySelectorAll('.item').length;i++)
    //    {
    //      if(li==document.querySelectorAll('.item')[i]){
    //      var myObj_deserialized1=JSON.parse(document.querySelectorAll('.item')[i].firstChild.textContent)
    //      myForm.querySelector('#name').value=myObj_deserialized1.name;
    //      myForm.querySelector('#email').value=myObj_deserialized1.email;
    //      localStorage.removeItem(myObj_deserialized1.email);
    //      }
    //    }
         userList.removeChild(li);
      }
     }
}

window.addEventListener('DOMContentLoaded',()=>
{
    axios.get("https://crudcrud.com/api/a70a2badbb04441c89ac596a01906f9e/appointmentdata")
    .then((response)=>{
       // console.log(response)
        for(var i=0;i<response.data.length;i++)
        {
            shownonScreen(response.data[i]);
        }
    })
    .catch((err)=>console.log(err));
})