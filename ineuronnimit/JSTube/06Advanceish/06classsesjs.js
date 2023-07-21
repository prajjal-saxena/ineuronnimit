class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    courseList = [];   // agar hamma esa private bnana ha toh #courseList likh daga toh neecha hum direct courseList sa access ni kar pa aga

    getInfo() {
        return { name: this.name, email: this.email};
    }

    enrollCourse(name){
        this.courseList.push(name)
    }
    getCourseList() {
        return this.courseList;
    }
    static login() {  //static bnakar 1 tarika sa private kardia ha humna 
        return "You are logged in";
    }
}

module.exports = User

class SubAdmin  extends User{
    constructor(name, email){
        super(name, email);
    }
    getAdminInfo(){
        return "I am subadmin";
    }
}


const rock = new User("rock", "rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
console.log(rock.getCourseList());
console.log(rock.courseList);

const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo())
console.log(tom.login());

console.log(tom.getInfo());