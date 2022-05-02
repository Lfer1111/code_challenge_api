const PartnerController = require("../../lib/controllers/PartnerController")

describe("Test para PartnerController", () => {
    test("Test 1. Probar el primer metodo, total de estudiantes", () => {
        const totalStudents = PartnerController.getAllStudents()
        expect(totalStudents.length).toBe(51)
    })
    test("Test 2. Emails de estudiantes con Certificado", () => {
        const emailsStudents = PartnerController.getEmailStudentsCertificated()
        expect(emailsStudents).toContain("Todd@visualpartnership.xyz")
    })
    test("Test 3. Estudiantes con creditos mayores a 500", () => {
        const studentsHighCredit = PartnerController.getHighCreditsStudents(500)
        expect(studentsHighCredit.length).toBeGreaterThanOrEqual(27)
    })

})