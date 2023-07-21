//Always for prototype firstLetter is capital 
// With the help of this keyword we define object as well
//Kabhi bhi agar kissi code ka output ma constructor hoga toh new jarror hoga

//Prototype is a blueprint  
// ya User prototype ha but new kii help sa hum esa object bna danga



// var user ={name:prajjal}  jab hum object bnata ha neecha object(Proto) hota ha

const User = function(firstName, courseCount){  ///ya prototype ha esa object bnana ka lia hum new keyword use karaga
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`)
    }
}

User.prototype.getFirstname = function(){  //asa hum upar ya global prototype ma add kar sakta ha method 
    console.log(`Your first name is : ${this.firstName}`);
}

var prajjal =new User("prajjal",'2'); //regular function agar new na lga a toh or phir ya
prajjal.getCourseCount();            // upar esma this window object dekhaga but phir wo
                                     //undefined da daga but hum new lga danga probm sort out
if(hasOwnProperty('firstName')){     //object bna dagga new or this work karna lgaga
prajjal.getFirstname(); }             //phir this window object ko point nii karaga new jab 
console.log(prajjal)                 //lag ja aga new this ko sabhal latta ha


var sam = new User("Sam", 1);
sam.getCourseCount();
sam.getFirstname();
// es prototype ko jo console par ha usma hum apna code inject bhi kar sakta ha or 
//overrride bhi kar sakta ha



//var lco = {name : "Prajjal"}
// es object ka pass 1 property ha name  toh hasOwnProperty prototype bhi data ha ya 
// so esa hum use kar sakta ha true ya false bool ma kii ya prop ha hamara obj ma ya nahi
