import sqlite3 from "sqlite3";

// CONEXION A LA BASE DE DATOS (SOLO LECTURA).
const db = new sqlite3.Database(
  "./sqlite3.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

export default db;
