const Engineer = require('../lib/Engineer.js');

test('should return engineer name, id number, and email', () => {
    const engineer = new Engineer('John Smith', '0001', 'john@email.com');

    expect(engineer.name).toEqual('John Smith');
    // id
    expect(engineer.id).toEqual(expect.any(Number));
    // email
    expect(engineer.email).toEqual(expect.any(String));
});

test('should return gitHub user name', () => {
    // github // GitHub username
    const engineer = new Engineer('John Smith', '0001', 'john@email.com', 'johnsmith');

    expect(engineer.github).toEqual('johnsmith');  
});

test('gets an engineer role', () => {
    // getRole() Overridden to return 'Engineer'
    const engineer = new Engineer('John Smith', '0001', 'john@email.com');
    
    expect(engineer.role).toEqual('Engineer');
});

test('gets engineer github user name', () => {
    // getGithub()
    const engineer = new Engineer('John Smith', '0001', 'john@email.com', 'johnsmith');
    expect(engineer.getGithub()).toEqual('johnsmith');
});


