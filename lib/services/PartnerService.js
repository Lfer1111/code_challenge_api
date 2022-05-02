class PartnerService {
    static allStudents(students){
        return students;
    }

    static emailStudentsCertificated(students){
        const studentsWithCertificate = students.filter((student) => student.haveCertification === true);
        const emailStudents = studentsWithCertificate.map((student) => student.email);
        return emailStudents;
    }

    static highCreditsStudents(students, credits){
<<<<<<< HEAD
        const studentsWithHighCredits = students.filter((student) => student.credits >= credits);
        return studentsWithHighCredits;
=======
        const studentsWithHighCredits = students.filter((student) => student.credits >= credits)
        return studentsWithHighCredits
>>>>>>> f8b5cb0f3bcd687befbfe76507490db10d9ad62b
    }

}

module.exports = PartnerService;