class Users {
    name: string;
    constructor() {
      this.name = "";
    }
    addUser(users:string) {
        return `${users} is added.`;
    }
}

class Admin extends Users {
    admin_name: string;
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