const Reader = require("../../lib/utils/Reader")

describe("Test para el Reader", () => {
    test("Test 1. Probando el Reader con todos los estudiantes", () => {
        const students = Reader.readJsonFile("visualpartners.json")
        expect(students.length).toBe(51)
    })
    test("Test 2. Cantidad de estudiantes con Certificado", () => {
        const students = Reader.readJsonFile("visualpartners.json")
        const studentsCertificated = students.filter((student) => student.haveCertification === true)
        expect(studentsCertificated.length).toBe(29)
    })

})