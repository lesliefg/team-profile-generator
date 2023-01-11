const Intern = require('../lib/Intern');

test('Can get school name through constructor', () => {
    const school = 'Mortin High';
    const newIntern = new Intern('Marco', 76113181, 'marcotest@gmail.com', school);
    expect(newIntern.school).toBe(school);
});

test('Can get school using getSchool()', () => {
    const school = 'Mortin High';
    const newIntern = new Engineer('Oscar', 76113181, 'marcotest@gmail.com', school);
    expect(newIntern.getSchool()).toBe(school);
});

test('getRole() should return \"Intern\"', () => {
    const role = 'Intern';
    const newIntern = new Intern('Oscar', 76113181, 'marcotest@gmail.com', 'EnginGithub');
    expect(newIntern.getRole()).toBe(role);
});