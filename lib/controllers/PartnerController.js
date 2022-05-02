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
<<<<<<< HEAD
        return PartnerService.highCreditsStudents(students, credits);
=======
        return PartnerService.highCreditsStudents(students, credits)
>>>>>>> f8b5cb0f3bcd687befbfe76507490db10d9ad62b
    }
}

module.exports = PartnerController;