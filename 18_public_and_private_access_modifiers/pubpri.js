"use strict";
class Pubpri {
    pubpri_nm;
    pubpri_age;
    constructor() {
        this.pubpri_nm = '';
        this.pubpri_age = 0;
    }
    displayName() {
        console.log(this.pubpri_nm);
    }
    displayNameLength() {
        console.log(this.pubpri_nm.length);
    }
    displayAge() {
        console.log(this.pubpri_age);
    }
}
let wsx = new Pubpri();
wsx.displayName();
// wsx.displayNameLength(); This line gives you error in TypeScript becuase it is only accessable within class.
wsx.pubpri_age = 22;
wsx.displayAge();
