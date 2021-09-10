const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conectando bando de dados;
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'modal',
  port: 3306
});

db.connect(function (err){
  if (err) throw err;
  console.log('connected!')
});

// enviar os dados para o front end
app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM projects;";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  })
});

// inserindo dados no banco de dados
app.post("/api/insert", (req, res) => {
  // requisitando os dados do front end
  const projectName = req.body.projectName;
  const projectTech = req.body.projectTech;
  const projectDesc = req.body.projectDesc;

  const sqlInsert = "INSERT INTO projects (projectName, projectTech, projectDescription) VALUES (?,?,?);"
  db.query(sqlInsert, [projectName, projectTech, projectDesc], (err, result) => {
    console.log(result)
  });
});

app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;

  const sqlDelete = "DELETE FROM projects WHERE id = ?;";
  db.query(sqlDelete, id, (err, result) => {
    console.log(err);
  });
});

app.put("/api/update/:id", (req, res) => {
  const id = req.params.id;
  const projectName = req.body.projectName;
  const projectTech = req.body.projectTech;
  const projectDesc = req.body.projectDesc;

  const sqlUpdate = "UPDATE projects SET projectName = ?, projectTech = ?, projectDesc = ? WHERE id = ?;";
  db.query(sqlUpdate, [projectName, projectTech, projectDesc], (err, result) => {
    console.log(result)
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001')
});
