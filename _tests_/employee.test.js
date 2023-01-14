const Employee = require('../lib/Employee');

describe('New employee', () => {
    it('Can add a new employee', () => {
        const newPerson = new Employee();
        expect(typeof(newPerson)).toBe('object');
    });

    it('Can record name', () => {
        const name = 'Avery';
        const newPerson = new Employee(name);
        expect(newPerson.name).toBe(name);
    });

    it('Can record ID', () => {
        const id = 76113161;
        const newPerson = new Employee("Avery", id);
        expect(newPerson.id).toBe(id);
    });

    it('Can record email', () => {
        const email = 'averytest@gmail.com';
        const newPerson = new Employee("Avery", 76113161, email);
        expect(newPerson.email).toBe(email);
    });

    describe("getName", () => {
        it('Can record name using getName()', () => {
            const name = 'Avery';
            const newPerson = new Employee(name);
            expect(newPerson.getName()).toBe(name);
        });
    });

    describe("getId", () => {
        it('Can record name using getId()', () => {
            const id = 76113161;
            const newPerson = new Employee("Avery", id);
            expect(newPerson.getId()).toBe(id);
        });
    });

    describe("getEmail", () => {
        it('Can record name using getEmail()', () => {
            const email = 'averytest@gmail.com';
            const newPerson = new Employee("Avery", 76113161, email);
            expect(newPerson.getEmail()).toBe(email);
        });
    });

    describe("getRole", () => {
        it('getRole() should return \"Employee\"', () => {
            const role = 'Employee';
            const newPerson = new Employee('Avery', 76113161, 'averytest@gmail.com');
            expect(newPerson.getRole()).toBe(role);
        });
    });
});