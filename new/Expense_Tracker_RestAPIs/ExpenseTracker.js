var myForm=document.getElementById('my-form');
var Amount=document.getElementById('amount');
var Description=document.getElementById('description');
var userList=document.getElementById('users');

document.addEventListener('submit',createElement)
function createElement(e)
{
    e.preventDefault(e);
    var selectItem=document.getElementById('category');
    var output=selectItem.value;
    if(Amount.value===''||Description.value==='')
    {
        alert('Please fill all fields');

    }
    else{  
        const myObj=
        {
              amount:Amount.value,
              description:Description.value,
              category:output
        }
       axios.post(`https://crudcrud.com/api/941300f30fe24730b1a50939c26346b6/appointmentData`,myObj)
       .then(response=>
        {
            console.log(response);
            shownonScreen(response.data);
        })
        .catch(err=>{console.log(err)})
    }
  
}
function shownonScreen(data)
{
    let li=document.createElement('li');
    li.className='item';
    li.appendChild(document.createTextNode(`${data.amount}-${data.description}-${data.category}`));
    let deleteBtn=document.createElement('button');
    deleteBtn.className='btn';
    deleteBtn.appendChild(document.createTextNode('Delete exp'));
    let editBtn=document.createElement('button');
    editBtn.className='btn';
    li.appendChild(deleteBtn);
    editBtn.appendChild(document.createTextNode('Edit exp'));
    li.appendChild(editBtn);
    userList.appendChild(li);
    userList.addEventListener('click',deleteexp);
    userList.addEventListener('click',editexp);
    function deleteexp(e)
    {
        e.preventDefault();
        if(e.target==deleteBtn)
        {
            let li=e.target.parentElement;
            axios.get(`https://crudcrud.com/api/941300f30fe24730b1a50939c26346b6/appointmentData`)
            .then(response=>{
                for(var i=0;i<response.data.length;i++)
                {
                    if(li.innerHTML.indexOf(response.data[i].description)!=-1)
                    {
                        axios.delete(`https://crudcrud.com/api/941300f30fe24730b1a50939c26346b6/appointmentData/${response.data[i]._id}`)
                        .then().catch(err=>console.log(err))
                        
                    }
                }
            }).catch(err=>console.log(err))
            userList.removeChild(li);
        }
    }
    function editexp(e)
    {
        e.preventDefault();
        if(e.target==editBtn)
        {
            let li=e.target.parentElement;
            axios.get(`https://crudcrud.com/api/941300f30fe24730b1a50939c26346b6/appointmentData`)
            .then(response=>{
                for(var i=0;i<response.data.length;i++)
                {
                    if(li.innerHTML.indexOf(response.data[i].description)!=-1)
                    {
                        myForm.querySelector('#amount').value=response.data[i].amount;
                        myForm.querySelector('#description').value=response.data[i].description;
                        myForm.querySelector('#category').value=response.data[i].category;
                        axios.delete(`https://crudcrud.com/api/941300f30fe24730b1a50939c26346b6/appointmentData/${response.data[i]._id}`)
                        .then().catch(err=>console.log(err))
                        
                    }
                }
            }).catch(err=>console.log(err))
            userList.removeChild(li);
        }
    }
}
 window.addEventListener('DOMContentLoaded',reload)
 function reload()
 {
    axios.get(`https://crudcrud.com/api/941300f30fe24730b1a50939c26346b6/appointmentData`)
    .then(response=>{
        for(var i=0;i<response.data.length;i++)
        {
            shownonScreen(response.data[i])
        }
    }).catch(err=>console.log(err))
 }