var user = {
    firstName : "Prajjal",
    lastName : "Saxena",
    role : "admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    info  : function(){
        return user;
    }
}

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount())

user.buyCourse("React js");
user.buyCourse("Angular");
console.log(user.getCourseCount())
console.table(user.info());