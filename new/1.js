

function fun1()
{
    
for(var i=0;i<=5;i++)
{
    function fun2(x)
    {
        setTimeout(()=>{console.log(x)},1000)
    }
    fun2(i);
}
}
fun1();
