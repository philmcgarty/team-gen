class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = parseInt(id);
        this.email = email;
    }

    getName(){
        return this.name;
    };

    getId(){
        return this.id;
    };

    getEmail(){
        return this.email;
    };

    getRole(role='Employee'){
        return role;
    };
}


module.exports = Employee;