const listElement = document.querySelector('#app ul'); //Buscando minha div no body
const inputElement = document.querySelector('#app input'); //Buscando minha div no body
const buttonElement = document.querySelector('#app button'); //Buscando minha div no body

//Amazenando o que você vai digitar, e quando f5 a página, ainda continua sua frase
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function acessaTodos() {

    listElement.innerHTML = '';

    for (todo of todos) {
        //Buscando os nomes da lista e criando uma lista
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        //Criando um elemento para exculir o que está na tela
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        //Colocando um link no 'Excluir'
        linkElement.setAttribute('href', '#')
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ') ');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement)
    }
}

acessaTodos();
//Função para adicionar uma frase 
function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    acessaTodos();
    saveToStorage();
}
buttonElement.onclick = addTodo;

//Função para remover uma frase da lista
function deleteTodo(pos) {
    todos.splice(pos, 1);
    acessaTodos();
    saveToStorage();
}

//Função para salva no store
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}