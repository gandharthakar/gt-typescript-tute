"use strict";
class Users {
    name;
    constructor() {
        this.name = "";
    }
    addUser(users) {
        return `${users} is added.`;
    }
}
class Admin extends Users {
    admin_name;
    constructor() {
        super();
        this.admin_name = this.name;
    }
    print() {
        return this.admin_name;
    }
}
let abcd = new Users();
console.log(abcd.addUser("Abhishek"));
let zzz = new Admin();
zzz.name = "Arijit";
console.log(zzz.print());
