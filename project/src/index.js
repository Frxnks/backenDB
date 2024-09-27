import { consultas, modificar } from "./consulta.js";
import http from "http";

const server = http.createServer((request, response) => {
  if (request.url === "/getUsuario") {
    consultas("SELECT * FROM usuario")
      .then((rows) => {
        console.log("Valores de consulta: ", rows);
        rows = JSON.stringify(rows);
        response.end(rows);
      })
      .catch((err) => {
        console.error("Error en la consulta:", err);
      });
  }

  if (request.url === "/getSeccionTema") {
    consultas(
      "SELECT seccion.nombreSeccion, Tema.nombreTema FROM seccion INNER JOIN tema ON seccion.idTema = Tema.idTema"
    )
      .then((rows) => {
        rows = JSON.stringify(rows);
        console.log("Valores de consulta: ", rows);
        response.end(rows);
      })
      .catch((err) => {
        console.error("Error en la consulta:", err);
      });
  }

  if (request.url === "/getSeccionTema/getMaterialSeccion") {
    consultas(
      "SELECT material.nombreMaterial, material.tipo, seccion.nombreSeccion FROM material INNER JOIN seccion ON material.idSeccion = seccion.idSeccion"
    )
      .then((rows) => {
        rows = JSON.stringify(rows);
        console.log("Valores de consulta: ", rows);
        response.end(rows);
      })
      .catch((err) => {
        console.error("Error en la consulta:", err);
      });
  }

  // 1) ALTER TABLE Material ADD COLUMN numDescargas INT;
  // 2) ALTER TABLE Seccion MODIFY COLUMN nombreSeccion VARCHAR(100); MODIFY NO SOPORTADO
  // 5) UPDATE usuario SET nombre = 'nuevoNombre' WHERE idUsuario = 1
  // 6) UPDATE material SET estado = 1 WHERE idMaterial = 12
  // 7) INSERT INTO usuario (permisos, nombre, correo) VALUES (1, 'nombredesdebackend', 'correobackend@ejemplo.com')
  // 8) INSERT INTO tema (nombreTema) VALUES ('nuevoTemaBackend')
  // 9) DELETE FROM material WHERE idMaterial = 5
  //10) DROP TABLE material

  if (request.url === "/modificacion") {
    modificar("").catch((err) => {
      console.error("Error en la consulta:", err);
    });
  }
  if (request.url === "/") {
    response.end("Hola carlita");
  }
});
server.listen(3000);

console.log("Conexion en el puerto 3000");
