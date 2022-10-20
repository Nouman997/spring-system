const express = require("express");
const router = express.Router();
const company = require("../controller/company-controller");
const employee = require("../controller/employee-controller");

//Get Company
router.get("/get-company", company.getCompany);
//Add Company
router.post("/add-company", company.addCompany);
//Get single Company
router.get("/get-single-company/:id", company.getCompanyById);
//Delete Company
router.delete("/delete-company/:id", company.deleteCompany);
//Update Company
router.put("/update-company/:id", company.updateCompany);

//Get Employee
router.get("/get-employee", employee.getEmployee);
//Add Employee
router.post("/add-employee", employee.addEmployee);
//Get single Employee
router.get("/get-single-employee/:id", employee.getEmployeeById);
//Delete Employee
router.delete("/delete-employee/:id", employee.deleteEmployee);
//Update Employee
router.put("/update-employee/:id", employee.updateEmployee);

module.exports = router;
