const Intern = require('../lib/Intern.js');

test('should return intern name, id number, and email', () => {
    const intern = new Intern('John Smith', '0001', 'john@email.com');

    expect(intern.name).toEqual('John Smith');
    // id
    expect(intern.id).toEqual(expect.any(Number));
    // email
    expect(intern.email).toEqual(expect.any(String));
});

test('should return intern school name', () => {
    // school
    const intern = new Intern('John Smith', '0001', 'john@email.com', 'Madeup University');

    expect(intern.school).toEqual('Madeup University');  
});

test('gets an intern role', () => {
    // getRole() Overridden to return 'Intern'
    const intern = new Intern('John Smith', '0001', 'john@email.com');
    
    expect(intern.role).toEqual('Intern');
});

test('gets intern school name', () => {
    // getSchool()
    const intern = new Intern('John Smith', '0001', 'john@email.com', 'Madeup University');
    expect(intern.getSchool()).toEqual('Madeup University');
});