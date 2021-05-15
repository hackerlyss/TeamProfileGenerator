const Intern = require("../lib/Intern");
describe("Intern", () => {
    it("can get the school name using constructor argument", () => {
        const sample = "Harvard";
        const newIntern = new Intern("Sally",404,"email@email.com",sample);
        expect(newIntern.school).toBe(sample);
    })
    it("can get the school name using getSchool function", () => {
        const sample = "Harvard";
        const newIntern = new Intern("Sally",404,"email@email.com",sample);
        expect(newIntern.getSchool()).toBe(sample);
    })
    it("can get role of the Intern using getRole", () => {
        const sample = "Intern";
        const newIntern = new Intern("Sally",404,"email@email.com",sample);
        expect(newIntern.getRole()).toBe(sample);
    })
    
    

})