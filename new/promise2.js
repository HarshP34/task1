function bookticket()
{
    return new Promise((resolve,reject)=>
    {
         setTimeout(()=>{
            resolve('Ticket booked')
         },5000)
    })
}
function catchthebus()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve('Pick up the Bus')
        },2000)
    })
}
function takesit()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve('sit taken enjoy the movie')
        },1000)
    })
}
async function movietime()
{
    try{
        const msg=await bookticket();
        console.log(msg);
        const msg1=await catchthebus();
        console.log(msg1);
        const msg2=await takesit();
        console.log(msg2);
    }catch(err){console.log(err)}

}
movietime();