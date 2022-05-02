class PartnerService {
    static allStudents(students){
        return students
    }

    static emailStudentsCertificated(students){
        const studentsWithCertificate = students.filter((student) => student.haveCertification === true)
        const emailStudents = studentsWithCertificate.map((student) => student.email)
        return emailStudents
    }

    static highCreditsStudents(students){
        const studentsWithHighCredits = students.filter((student) => student.credits >= 500)
        return studentsWithHighCredits
    }

}

module.exports = PartnerService