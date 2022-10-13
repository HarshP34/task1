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
   lastupdated(output);
  
},1000)

}
var intervalid=0
function lastupdated(output)
{
    clearInterval(intervalid);
    var intervalid=setInterval(()=>
    { 
        var input='';
       input=output+`last updated ${(new Date().getTime())/1000} seconds ago`;
        document.body.innerHTML=input;
      
    },1000)
}
function createpost(post,callback)
{
    setTimeout(()=>
    {
       posts.push({...post,createdAt:new Date().getTime()});
       callback();
    },2000)
}
function create4post(callback1,post4,callback2)
{
    setTimeout(()=>
    {
      return callback1(post4,callback2);
    },1000)
}
createpost({title:'Post Three', body:'this is post three'},getposts)
create4post(createpost,{title:'Post Four', body:'this is post four'},getposts);

