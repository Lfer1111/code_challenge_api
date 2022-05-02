const Reader = require("../../lib/utils/Reader");
const PartnerService = require("../../lib/services/PartnerService");

describe("Test para PartnerService", () => {
    test("Test 1. Probar el primer metodo, total de estudiantes", () => {
        const students = Reader.readJsonFile("visualpartners.json");
        const totalStudents = PartnerService.allStudents(students);
        expect(totalStudents.length).toBe(51);
    });
    test("Test 2. Emails de estudiantes con Certificado", () => {
        const students = Reader.readJsonFile("visualpartners.json");
        const emailsStudents = PartnerService.emailStudentsCertificated(students);
        expect(emailsStudents).toContain("Todd@visualpartnership.xyz");
    });
    test("Test 3. Estudiantes con creditos mayores a 500", () => {
<<<<<<< HEAD
        const students = Reader.readJsonFile("visualpartners.json");
        const studentsHighCredit = PartnerService.highCreditsStudents(students, 500);
        expect(studentsHighCredit.length).toBeGreaterThanOrEqual(27);
    });
=======
        const students = Reader.readJsonFile("visualpartners.json")
        const studentsHighCredit = PartnerService.highCreditsStudents(students, 500)
        expect(studentsHighCredit.length).toBeGreaterThanOrEqual(27)
    })
>>>>>>> f8b5cb0f3bcd687befbfe76507490db10d9ad62b

});