const Manager = require("../lib/Manager");

describe("Manager role", () => {
    it("can set the phone number using constructor argument", () => {
        const sample = "123-456-7890";
        const newManager = new Manager("Jelinda",808,"boss@gmail.com","123-456-7890");
        expect(newManager.phone).toBe(sample);
    })
    it("can get the phone number using constructor argument", () => {
        const sample = "123-456-7890";
        const newManager = new Manager("Jelinda",808,"boss@gmail.com","123-456-7890");
        expect(newManager.getPhone()).toBe(sample);
    })
    it("can get the role of manager using getRole", () => {
        const sample = "Manager";
        const newManager = new Manager("Jelinda",808,"boss@gmail.com","123-456-7890");
        expect(newManager.getRole()).toBe(sample);
    })
})