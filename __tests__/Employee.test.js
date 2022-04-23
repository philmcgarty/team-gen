const Employee = require('../lib/Employee.js');  


test('should return employee name, number, and email', () => {
    const employee = new Employee('John Smith', '0001', 'phil@email.com');
    // name
    expect(employee.name).toEqual('John Smith');
    // id
    expect(employee.id).toEqual(expect.any(Number));
    // email
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () =>{
    // getName()
    const employee = new Employee('John Smith', '0001', 'john@email.com');
    expect(employee.getName()).toEqual('John Smith');
});

test('gets employee id number', () => {
    // getId()
    const employee = new Employee('John Smith', '0001', 'john@email.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets an employee email address', () => {
    // getEmail()
    const employee = new Employee('John Smith', '0001', 'john@email.com');
    expect(employee.getEmail()).toEqual('john@email.com');
});

test('gets an employee role', () => {
    // getRole() - Return 'Employee'
    const employee = new Employee('John Smith', '0001', 'john@email.com');
    expect(employee.getRole()).toEqual('Employee');
});
    

    

    

    

    

    

    


