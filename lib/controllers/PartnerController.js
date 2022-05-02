const PartnerService = require("../services/PartnerService")
const Reader = require("../../lib/utils/Reader")
const students = Reader.readJsonFile("visualpartners.json")

class PartnerController {
    static getAllStudents(students){
        return PartnerService.allStudents(students)
    }

    static getEmailStudentsCertificated(students){
        return PartnerService.emailStudentsCertificated(students)
    }

    static getHighCreditsStudents(students){
        return PartnerService.highCreditsStudents(students)
    }
}

module.exports = PartnerController