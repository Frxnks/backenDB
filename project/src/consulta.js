import db from "./db.js";

export function consultas(consulta) {
  return new Promise((resolve, reject) => {
    db.all(consulta, (err, rows) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

export function modificar(consulta) {
  return new Promise((resolve, reject) => {
    db.run(consulta, function (err) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve({ id: this.lastID, changes: this.changes });
      }
    });
  });
}
