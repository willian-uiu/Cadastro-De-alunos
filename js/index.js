// Mascara do telefone
var SPMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
    spOptions = {
        onKeyPress: function (val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
    };

$('#telefone').mask(SPMaskBehavior, spOptions);

// Array de alunos
var alunos = []

var categorias = [
    {id: 1, nome: "Java"},
    {id: 2, nome: "Javascript"},
    {id: 3, nome: ".NET"},
    {id: 4, nome: "Python"}
]

//OnLoad
loadAlunos();

function loadAlunos() {
    for (let aluno of alunos) {
        addNewRow(aluno);
    }
}

function addNewRow(aluno) {
    var table = document.getElementById("tabela");

    var newRow = table.insertRow();

    var idNode = document.createTextNode(aluno.id);
    var nomeNode = document.createTextNode(aluno.nome);
    var emailNode = document.createTextNode(aluno.email);
    var telefoneNode = document.createTextNode(aluno.telefone);
    var cursoNode = document.createTextNode(categorias[aluno.curso - 1].nome);
    var turnoNode = document.createTextNode(aluno.turno);

    newRow.insertCell().appendChild(idNode);
    // Nome do aluno
    newRow.insertCell().appendChild(nomeNode);

    // Email do aluno responsivo
    var cell = newRow.insertCell(); 
    cell.className="d-none d-md-table-cell";
    cell.appendChild(emailNode);

    // Telefone do aluno
    newRow.insertCell().appendChild(telefoneNode);

    // Curso do aluno
    newRow.insertCell().appendChild(cursoNode);

    // Turno do aluno
    newRow.insertCell().appendChild(turnoNode);

}


function save() {
    var aluno = {
        id: alunos.length + 1,
        nome: document.getElementById("inputName").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("inputEmail").value,
        curso: document.getElementById("inputCurso").value,
        turno: document.querySelector('input[name="turno"]:checked').id
    }

    addNewRow(aluno);
    alunos.push(aluno);

    document.getElementById("formulario").reset();
}

