import sqlite3 from "sqlite3";

// CONEXION A LA BASE DE DATOS (SOLO LECTURA).
const db = new sqlite3.Database("./sqlite3.db", sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.log(err);
  }
});

export default db;

// CONSULTA POR TODAS LAS COLUMNAS DE UNA TABLA.
// db.all("SELECT * FROM usuario WHERE permisos = 1", (err, rows) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Resultados de la consulta:", rows);
//   }
// });

// CONSULTA POR UNA SOLA COLUMNA.
// db.get("SELECT * FROM usuario WHERE permisos = 1", (err, rows) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(rows);
//   }
// });

// UTILIZAR DB.RUN(...) PARA MODIFICAR.
