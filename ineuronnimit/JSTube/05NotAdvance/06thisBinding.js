const prajjal = {
    firstName : 'Prajjal',
    lastName : 'Saxena',
    role : 'Admin',
    courseCount : 3,
    getInfo : function() {
        console.log(`
           First Name is ${this.firstName}
           Last name is ${this.lastName}
           His role is ${this.role}
           and he is studying ${this.courseCount} courses
        `);
    },
}

const dj = {
    firstName :'Rock',
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount: 4,
}

// prajjal.getInfo();
//dj.getInfo(); //but asa hum phala wala object ko dusra sa access ni kar pa aga tab atta ha hamara bind jo phala wala object ko dusra wala object ma include kar dagga

//prajjal.getInfo.bind(dj); //agar hum ethna ko run karaga toh hamma kuch output ni a aga becz bind hamma reference data ha
var djInfo = prajjal.getInfo.bind(dj);
djInfo();



getInfo(); //getInfo is reference of method and () it is a calling of method
