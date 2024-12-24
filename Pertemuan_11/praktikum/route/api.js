// Import Student Controller
const StudentController =
require("../controller/StudentController");

const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.send("Hello Express");
});

// routing student
route.get("/students", StudentController.index);
route.post("/students", StudentController.store);
route.put("/students/:id", StudentController.update);
route.delete("/students/:id", StudentController.delete);

// Export router
module.exports = route;