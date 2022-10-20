const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "spring-system",
  password: "admin123",
  port: 5432,
});

if (pool) {
  console.log("Database connected successfully");
} else {
  console.log("Database not connected");
}

module.exports = pool;
