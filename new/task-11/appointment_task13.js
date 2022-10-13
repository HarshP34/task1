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
    
    axios.post("https://crudcrud.com/api/a70a2badbb04441c89ac596a01906f9e/appointmentdata",myObj).then((response)=>
    {
      //console.log(response);
      shownonScreen(response.data);
    }).catch((err)=>{
      document.body.innerHTML+='<h4>Something Went Wrong</h4>'
      console.log(err)});  
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
       //  console.log(li);
         axios.get(`https://crudcrud.com/api/a70a2badbb04441c89ac596a01906f9e/appointmentdata`)
         .then((response)=>{
            //console.log(response)
             for(var i=0;i<response.data.length;i++)
             {
                 if( li.innerHTML.indexOf(response.data[i].email)!=-1){
                    console.log(response.data[i]);
                    axios.delete(`https://crudcrud.com/api/a70a2badbb04441c89ac596a01906f9e/appointmentdata/${response.data[i]._id}`)
                   .then()
                    .catch(err=>console.log(err));
                 }
             }
         })
         .catch((err)=>console.log(err));

   
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
         userList.removeChild(li);
      }
     }
}

window.addEventListener('DOMContentLoaded',()=>
{
    axios.get(`https://crudcrud.com/api/a70a2badbb04441c89ac596a01906f9e/appointmentdata`)
    .then((response)=>{
       // console.log(response)
        for(var i=0;i<response.data.length;i++)
        {
            shownonScreen(response.data[i]);
        }
    })
    .catch((err)=>console.log(err));
})