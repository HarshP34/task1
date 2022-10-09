let MyForm=document.getElementById('my-form');
let Discription=document.getElementById('discription');
let Amount=document.getElementById('amount');
let UserList=document.getElementById('users');
let body=document.getElementById('body');



document.addEventListener('submit', creatElement);
function creatElement(e)
{
    e.preventDefault();

    selectElement = document.querySelector('#catogary');
    var output = selectElement.value;

    if(Amount.value===''|| Discription.value==='')
    {
        alert('Please fill all fields');
    }
    else{
        const myObj=
        {
            amount:Amount.value,
            discription:Discription.value,
            catogary:output
            
        }
    var myObj_serialized=JSON.stringify(myObj);
        localStorage.setItem(myObj.discription,myObj_serialized);
        var li=document.createElement('li');
        li.className='item';
        li.appendChild(document.createTextNode(localStorage.getItem(myObj.discription)));
        var deleteBtn=document.createElement('button');
        deleteBtn.className='btn';
        deleteBtn.appendChild(document.createTextNode('Delete expenses'));
        deleteBtn.style.background='danger';
        li.appendChild(deleteBtn);
        var editBtn=document.createElement('button');
        editBtn.className='btn';
        editBtn.appendChild(document.createTextNode('Edit expenses'));
        editBtn.style.background='lightgreen';
        li.appendChild(editBtn);
        UserList.appendChild(li);
    }
    document.addEventListener('click',delete_expense);
    function delete_expense(e)
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
                 var  myObj_deserialized=JSON.parse(document.querySelectorAll('.item')[i].childNodes[0].textContent)
                  localStorage.removeItem(myObj_deserialized.discription);
                  MyForm.querySelector('#amount').value='';
                  MyForm.querySelector('#discription').value='';
                }
             }
             UserList.removeChild(li);
            }
        }
    }
    document.addEventListener('click',edit_expense);
    function edit_expense(e)
    {
        if(e.target==editBtn)
        {
            var li=e.target.parentElement;
            for(var i=0;i<document.querySelectorAll('.item').length;i++)
            {
               if(li==document.querySelectorAll('.item')[i])
               {
                var  myObj_deserialized=JSON.parse(document.querySelectorAll('.item')[i].childNodes[0].textContent)
                 
                 MyForm.querySelector('#amount').value=myObj_deserialized.amount;
                 MyForm.querySelector('#discription').value=myObj_deserialized.discription;
                 MyForm.querySelector('#catogary').value=myObj_deserialized.catogary;
                 localStorage.removeItem(myObj_deserialized.discription);
               }
            }
            UserList.removeChild(li);
        }
    }
}