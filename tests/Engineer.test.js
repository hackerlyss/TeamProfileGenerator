const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Can get the engineer's github username via getGithub", () => {
        const username = "programmer247";
        const newEngineer = new Engineer("Alyssa",123,"email@gmail.com",username)
        expect(newEngineer.getGithub()).toBe(username)
    });
    it("Can set the engineer github username with constructor argument", () => {
        const username = "programmer247";
        const newEngineer = new Engineer("Alyssa",123,"email@gmail.com",username);
        expect(newEngineer.github).toBe(username);
    })
    describe("getRole", () => {
        it("Can get the engineer role using getRole", () => {
            const sample = "Engineer";
            const newEngineer = new Engineer("Alyssa",123,"employee@email.com",sample);
            expect(newEngineer.getRole()).toBe(sample);
        })
    })
})