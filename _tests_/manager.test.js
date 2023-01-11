const Manager = require('../lib/Manager');

test('Can get school name through constructor', () => {
    const officeNumber = 1515;
    const newManager = new Manager('Demetrios', 76113191, 'demetriostest@gmail.com', officeNumber);
    expect(newManager.school).toBe(officeNumber);
});

test('Can get office number using getOfficeNumber()', () => {
    const officeNumber = 1515;
    const newManager = new Manager('Demetrios', 76113191, 'demetriostest@gmail.com', officeNumber);
    expect(newManager.getOfficeNumber()).toBe(officeNumber);
});

test('getRole() should return \'Engineer\'', () => {
    const role = 'Manager';
    const newManager = new Manager('Demetrios', 76113191, 'demetriostest@gmail.com', 1515);
    expect(newManager.getRole()).toBe(role);
});