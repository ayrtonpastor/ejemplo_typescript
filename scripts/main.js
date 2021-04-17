import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
var cursos = [new Curso("Prácticas escenciales para el agilismo", 20, 90, true, 2019),
    new Curso("Ingeniería de software para la web", 15, 99, true, 2018),
    new Curso("Pruebas automatizadas", 25, 50, false, 2020),
    new Curso("PPrincipios de diseño y arquitectura", 30, 75, true, 2020)];
export var ap = new Aprendiz("Ayrton Aldair", "Pastor Castillo", "avatar.png", 26, NivelEducativo.BACHILLERATO, cursos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./" + aprendiz.avatar + "\" height=\"100\"></td></tr>\n    <tr><td>Nombres:</td><td>" + aprendiz.nombres + "</td></tr>\n    <tr><td>Apellidos:</td><td>" + aprendiz.apellidos + "</td></tr>\n    <tr><td>Nivel Educativo:</td><td>" + aprendiz.nivelEducativo + "</td></tr>\n    <tr><td>Edad:</td><td>" + aprendiz.edad + "</td></tr>";
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos certificados</b></td><td>" + numeroCertificados + "</td>";
    estadisticasTable.appendChild(trElement);
}
