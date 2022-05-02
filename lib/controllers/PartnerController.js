const PartnerService = require("../services/PartnerService");
const Reader = require("../../lib/utils/Reader");
const students = Reader.readJsonFile("visualpartners.json");

class PartnerController {
    static getAllStudents(){
        return PartnerService.allStudents(students);
    }

    static getEmailStudentsCertificated(){
        return PartnerService.emailStudentsCertificated(students);
    }

    static getHighCreditsStudents(credits){
        return PartnerService.highCreditsStudents(students, credits);
    }
}

module.exports = PartnerController;