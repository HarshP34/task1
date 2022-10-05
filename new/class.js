class Student
{
   static count=0;
   constructor(name,age,board_mark)
   {
      this.name=name;
      this.age=age;
      this.board_mark=board_mark;
   }
  Iseligible(age)
  {
      return (min_mark)=>
      {
         if(this.age>age && this.board_mark>min_mark)
         console.log(`${this.name}`);
      }
   
  }
 
}
var student1=new Student('harsh',23,59);
var student2=new Student('ayush',25,70);
var student3=new Student('keval',20,45);
var student4=new Student('yash',21,30);
var student5=new Student('anand',24,51);
student1.Iseligible(22)(40);
student2.Iseligible(22)(40);
student3.Iseligible(22)(40);
student4.Iseligible(22)(40);
student5.Iseligible(22)(40);