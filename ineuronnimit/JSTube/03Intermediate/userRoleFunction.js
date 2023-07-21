/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with all success
subadmin - with access to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role) */


var getUserRole = function (name, role){
   switch(role){
      case "admin" : return(`${name} have all access`);
      break
      case "subadmin" : return(`${name} have access to create/delete courses`);
      break
      case "testprep" : return(`${name} have access to create/delete tests`);
      break
      case "user" : return(`${name} have consume all content`);
      break
   default : return(`Trial User`);
   break;
   }
}


let ro = getUserRole(`Shubham`, `admin`)
console.log(ro)