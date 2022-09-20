student=[];

function submit()
{
   var displaystudent= [];
   for(var i=1; i<=4; i++)
   {
    var nameofthestudent= document.getElementById("student_"+i);
    console.log(nameofthestudent);
    student.push(nameofthestudent);
   }
   console.log(student);

   var length=student.length;
   console.log(length);

   for(var j=0; j<length; j++)
   {
    displaystudent.push("<h4>"+ student[j]+"</h4>");
console.log(displaystudent);
}
}
