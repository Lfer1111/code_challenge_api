const PartnerController = require("./controllers/PartnerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json("Bienvenidos Estudiantes!!");
});

app.get("/v1/students", (req, res) => {
    const allTotalStudents = PartnerController.getAllStudents();
    res.json(allTotalStudents);
});

app.get("/v1/students/certificate/emails", (req, res) => {
    const studentsEmails = PartnerController.getEmailStudentsCertificated();
    res.json(studentsEmails);
});

app.get("/v1/students/credits/:credits", (req, res) => {
    const credits = req.params.credits;
    const highCreditStudents = PartnerController.getHighCreditsStudents(credits);
    res.json({credits: credits, students: highCreditStudents});
});



app.listen(port, () => {
    console.log(`Visual Partners API in localhost:${port}`);
});
