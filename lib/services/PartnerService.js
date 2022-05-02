class PartnerService {
    static getAllStudents(students){
        return students
    }

    static getAllStudents(students){
        const studentsWithCertificate = students.filter((student) => student.haveCertification === true)
        const emailStudents = studentsWithCertificate.map((student) => student.email)
        return emailStudents
    }

    static getAllStudents(students){
        const studentsWithHighCredits = students.filter((student) => student.credits >= 500)
        return studentsWithHighCredits
    }

}

module.exports = PartnerService