//classes is blueprints for objects
class users {
    //the constructor makes objects of instances from the class    
    constructor(name, age, gender) {
        //properties that the object will contain
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    //method to display use info
    usersMethod(){
        console.log(`${this.name} is a ${this.age} year old ${this.gender}`);
    }
}

//creating new instance of a user
const newUser = new users('truls', 22, 'male');

//accessing properties
console.log(newUser.name);

//calling a method
newUser.usersMethod();




//you can also inherit classes
class hobbies extends users {
    constructor(name, sport){
        super(name) //inherits users name
        this.sport = sport;
    }

    hobbiesMethod(){
        console.log(`${this.name} likes ${this.sport}`);
    }
}

//creating new instance with iinherited properties
const usersHobbies = new hobbies(`fillip`, `climbing`);

//calling the hobbiesMethod
usersHobbies.hobbiesMethod();



//private fields in classes
class login {
    #userId; //private field uses #, and are only accessed in the class

    constructor(username, userId){
        this.username = username;
        this.#userId = userId;
    }

    //methodS
    displayInfo (){
        console.log(`${this.username} has an ${this.userId}, but its private`);
    }

    //this method will get the userId
    getUserId (){
        return this.#userId;
    }
}

const sevat = new login(`sevat`, `28472647`);
sevat.displayInfo(); // output - sevat has an undefined, but its private
console.log(sevat.getUserId()); // output - 28472647
