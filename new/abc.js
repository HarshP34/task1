//Using bind method
var multiply=function(x,y)
{
  console.log(x*y);
}
var multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(4);

var multiplyByThree=multiply.bind(this,3);
multiplyByThree(5);

//Using closures

var multiply=function(x)
{
    return function(y)
    {
        console.log(x*y);
    }
}
var multiplyByTwo=multiply(2);
multiplyByTwo(4);

var multiplyByThree=multiply(3);
multiplyByThree(5);