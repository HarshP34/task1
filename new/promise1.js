const posts=[
    {title:'Post One' ,body:'This is post one',createdAt:new Date().getTime()},
    { title:'Post Two' ,body:'This is post two',createdAt:new Date().getTime()}
]

function getposts(){ 
  
    setTimeout(()=>
    {
       let output='';
       posts.forEach((post)=>
       {
        output+=`<li>${post.title} created ${(new Date().getTime()-post.createdAt)/1000} seconds ago </li>`;
       })
       document.body.innerHTML= output;
    },0) 
}

function createpost(post)
{
    return new Promise((resolve,reject)=>{
            setTimeout(()=>
            {
               posts.push({...post,createdAt:new Date().getTime()});
               const error=false;
               if(!error){
                resolve(`${posts[posts.length-1].title}`);
           }
               else{reject('Error:Something went wrong');}
            },0)

        } )
        
}

function deletepost()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            if(posts.length!=0)
        {
            posts.pop()
             resolve();
        }
        else{
            reject('Error:Array is Empty');
        }
        },2000);  
    })  
}

const get=async()=>
{
    let a=await createpost({title:'Post Three',body:'This is post three'})
   // console.log(a,posts)
    getposts();
    await deletepost();
    getposts();
    await deletepost();
    getposts();
    await deletepost();
    getposts();
    await deletepost().catch(err=>console.log(err));
}
get();

     