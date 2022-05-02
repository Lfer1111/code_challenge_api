const PartnerService = require("../services/PartnerService")
const Reader = require("../../lib/utils/Reader")
const students = Reader.readJsonFile("visualpartners.json")

class PartnerController {
    static getAllStudents(){
        return PartnerService.allStudents(students)
    }

    static getEmailStudentsCertificated(){
        return PartnerService.emailStudentsCertificated(students)
    }

    static getHighCreditsStudents(){
        return PartnerService.highCreditsStudents(students)
    }
}

module.exports = PartnerController