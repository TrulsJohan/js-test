//OOP - OBJECT ORIENTED PROGRAMING


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



//static methodes, can not be called by instances
class MathHelper {
    static add(a, b) {
      return a + b;
    }
  }
  
  console.log(MathHelper.add(5, 3));  // Output: 8





  //full example
  class Employee {
    #salary;  // Private field
  
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.#salary = salary;
    }
  
    // Public method
    describe() {
      console.log(`${this.name} works as a ${this.position}.`);
    }
  
    // Private method to calculate yearly salary
    #calculateYearlySalary() {
      return this.#salary * 12;
    }
  
    getSalary() {
      return this.#calculateYearlySalary();
    }
  }
  
  const emp = new Employee('Alice', 'Developer', 5000);
  emp.describe();  // Output: Alice works as a Developer.
  console.log(`Yearly salary: $${emp.getSalary()}`);  // Output: Yearly salary: $60000 
