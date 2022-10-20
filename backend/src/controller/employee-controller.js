const pool = require("../db/connection");

//Add Employee
const addEmployee = (req, res) => {
  const { name, company, address } = req.body;

  pool.query(
    "INSERT INTO employee (name,company,address) VALUES ($1,$2,$3) RETURNING *",
    [name, company, address],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        res.status(201).json({
          msg: "Company added successfully",
          data: result.rows[0],
        });
      }
    }
  );
};

//Get Company
const getEmployee = (req, res) => {
  pool.query("SELECT * FROM employee", (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      data: result.rows,
    });
  });
};

//Get Company by id
const getEmployeeById = (req, res) => {
  let id = req.params.id;
  pool.query('SELECT * FROM employee WHERE "id"=$1', [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      data: result.rows,
    });
  });
};

//Delete Company
const deleteEmployee = (req, res) => {
  let id = req.params.id;
  pool.query('DELETE FROM employee WHERE "id"=$1', [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      msg: `Deleted successfully ${id}`,
    });
  });
};

//Update Company
const updateEmployee = (req, res) => {
  let id = req.params.id;

  const { name, company, address } = req.body;
  pool.query(
    'UPDATE employee SET "name" =$1,"company" =$2,"address" =$3 WHERE "id"=$4 RETURNING *',
    [name, company, address, id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json({
        msg: "Updated successfully",
        data: result.rows[0],
      });
    }
  );
};

module.exports = {
  addEmployee,
  getEmployee,
  getEmployeeById,
  deleteEmployee,
  updateEmployee,
};
