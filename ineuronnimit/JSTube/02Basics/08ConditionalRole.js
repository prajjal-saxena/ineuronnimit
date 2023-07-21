var user= 'testPrep';

switch(user){
    case "admin": console.log("You get full access");
    break;
    case "subadmin": console.log("get access to create/delete courses")
    break;
    case "testPrep": console.log("get access to create/delete")
    break;
    case "user": console.log("get access to create/delete courses")
    break;

    default: console.log("Trial user")
}