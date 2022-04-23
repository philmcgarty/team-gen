const Manager = require('../lib/Manager.js');

// In addition to Employee's properties and methods, Manager will also have:
test('should return manager name, number, and email', () => {
    const manager = new Manager('John Smith', '0001', 'phil@email.com');

    expect(manager.name).toEqual('John Smith');
    // id
    expect(manager.id).toEqual(expect.any(Number));
    // email
    expect(manager.email).toEqual(expect.any(String));
});

// officeNumber
test('should return manager office number', () => {
    const manager = new Manager('John Smith', '0001', 'phil@email.com', '123');

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('should get manager office number', () =>{
    const manager = new Manager('John Smith', '0001', 'phil@email.com', '123');

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})

test('gets manager name', () =>{
    // getName()
    const manager = new Manager('John Smith', '0001', 'john@email.com');
    expect(manager.getName()).toEqual('John Smith');
});

test('gets manager id number', () => {
    // getId()
    const manager = new Manager('John Smith', '0001', 'john@email.com');
    expect(manager.getId()).toEqual(expect.any(Number));
});

test('gets a manager email address', () => {
    // getEmail()
    const manager = new Manager('John Smith', '0001', 'john@email.com');
    expect(manager.getEmail()).toEqual('john@email.com');
});

test('gets a manager role', () => {
    // getRole() Overridden to return 'Manager'
    const manager = new Manager('John Smith', '0001', 'john@email.com');
    
    expect(manager.role).toEqual('Manager');
});


