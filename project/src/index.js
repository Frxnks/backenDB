import consultas from "./consulta.js";
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

  if (request.url === "/") {
    response.end("Hola carlita");
  }
});
server.listen(3000);

console.log("Conexion en el puerto 3000");
