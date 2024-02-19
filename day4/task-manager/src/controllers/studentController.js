import { Router } from "express";

const studentController = Router();

const studentList = [
  {
    name: "John",
    age: 34,
  },
  {
    name: "Sarah",
    age: 24,
  },
  {
    name: "Mary",
    age: 30,
  },
];

studentController.get("/list", (req, res) => {
  res.status(200).json({
    students: studentList,
  });
});


studentController.post("/create", (req, res) => {
  const student = req.body;
if(student.name == "" || student.age != ""){
  console.log("name: ", student.name, "age: ", student.age);

  res.status(200).json({
    message: "Student created!!!",
  });

}
else{
    res.status(400).json({
        message: "Unsuccessful!!!",
      });
    }
});

export default studentController;