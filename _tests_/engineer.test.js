const Engineer = require('../lib/Engineer');

test('Can get Github account through constructor', () => {
    const testGithub = 'EnginGithub';
    const newEngineer = new Engineer('Oscar', 76113171, 'oscartest@gmail.com', testGithub);
    expect(newEngineer.github).toBe(testGithub);
});

test('Can get Github username using getGithub()', () => {
    const testGithub = 'EnginGithub';
    const newEngineer = new Engineer('Oscar', 76113171, 'oscartest@gmail.com', testGithub);
    expect(newEngineer.getGithub()).toBe(testGithub);
});

test('getRole() should return \"Engineer\"', () => {
    const role = 'Engineer';
    const newEngineer = new Engineer('Oscar', 76113171, 'oscartest@gmail.com', 'EnginGithub');
    expect(newEngineer.getRole()).toBe(role);
});