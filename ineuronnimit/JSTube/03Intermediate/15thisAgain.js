/*What it be the this keyword its contain window objects or its contain the object which
  i have define so this things will be sorted Here*/ 

// => For all regular function calls, this points to window object or global object 


console.log(this)

var user ={
    firstName : 'Prajjal',
    courseCount : 4,
    getCourseCount: function(){
        console.log("Line13", this);

        function sayHello(){
            console.log("Hello");
            console.log("Line17",this);
        }
        sayHello();  //This is regular function call
    }
}

user.getCourseCount();   //This is not a regular function becz this is through an object



/*function getCourse() {
    //This is learning purpose of regular course
 }

getCourse()  //This is regular function call
} */


