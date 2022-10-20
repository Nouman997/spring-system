const pool = require("../db/connection");

//Add Company
const addCompany = (req, res) => {
  const { name, address } = req.body;

  pool.query(
    "INSERT INTO company (name,address) VALUES ($1,$2) RETURNING *",
    [name, address],
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
const getCompany = (req, res) => {
  pool.query("SELECT company.*,count(employee.*) from employee RIGHT JOIN company ON employee.company = company.name  GROUP BY company.id,company.name;", (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      data: result.rows,
    });
  });
};

//Get Company by id
const getCompanyById = (req, res) => {
  let id = req.params.id;
  pool.query('SELECT * FROM company WHERE "id"=$1', [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      data: result.rows,
    });
  });
};

//Delete Company
const deleteCompany = (req, res) => {
  let id = req.params.id;
  pool.query('DELETE FROM company WHERE "id"=$1', [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      msg: `Deleted successfully ${id}`,
    });
  });
};

//Update Company
const updateCompany = (req, res) => {
  let id = req.params.id;
  const { name, address } = req.body;
  pool.query(
    'UPDATE company SET "name" =$1,"address" =$2 WHERE "id"=$3 RETURNING *',
    [name, address, id],
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
  addCompany,
  getCompany,
  getCompanyById,
  deleteCompany,
  updateCompany,
};
