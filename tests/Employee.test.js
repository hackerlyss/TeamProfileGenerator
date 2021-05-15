const { TestScheduler } = require('@jest/core');
const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("Can create a new Employee instance", () => {
        const newEmployee = new Employee();
        expect(typeof(newEmployee)).toBe("object")
    });
    it("Can set the employee name with constructor argument", () => {
        const name = "Alyssa";
        const newEmployee = new Employee(name);
        expect(newEmployee.name).toBe(name);
    })
    it("Can set the employee id with constructor arugment", () => {
        const sample = 123;
        const newEmployee = new Employee("Alyssa", sample);
        expect(newEmployee.id).toBe(sample);
    })
    it("Can set the employee email with constructor arugment", () => {
        const sample = "employee@email.com";
        const newEmployee = new Employee("Alyssa", 123, sample);
        expect(newEmployee.email).toBe(sample);
    })
    describe("getName", () => {
        it("Can get the employee name via getName()", () => {
            const sample = "Alyssa";
            const newEmployee = new Employee(sample);
            expect(newEmployee.getName()).toBe(sample);
        })
    })
    describe("getId", () => {
        it("Can get the employee id via getId()", () => {
            const sample = 123;
            const newEmployee = new Employee("Alyssa", sample);
            expect(newEmployee.getId()).toBe(sample);
        })
    })
    describe("getEmail", () => {
        it("Can get the employee email via getEmail()", () => {
            const sample = "employee@email.com";
            const newEmployee = new Employee("Alyssa",123,sample);
            expect(newEmployee.getEmail()).toBe(sample);
        })
    })
    describe("getRole", () => {
        it("Can get the employee role using getRole", () => {
            const sample = "Employee";
            const newEmployee = new Employee("Alyssa",123,"employee@email.com");
            expect(newEmployee.getRole()).toBe(sample);
        })
    })
})