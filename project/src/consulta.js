import db from "./db.js";

// let a

// function consultas(consulta) {

//   db.all(consulta, (err, rows) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(rows);
//       return rows;
//     }
//   });

// }

function consultas(consulta) {
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
// consultas("SELECT * FROM usuario")
//   .then((rows) => {
//     a = rows;
//     console.log("Valores asignados a 'a':", a);
//   })
//   .catch((err) => {
//     console.error("Error en la consulta:", err);
//   });

export default consultas;
