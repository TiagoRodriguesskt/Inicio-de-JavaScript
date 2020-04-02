/**
         * 1º Exercício
        Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
        segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
        idade o resultado deve cair no .then , caso contrário, no .catch
        function checaIdade(idade) {
        // Retornar uma promise
        }
        checaIdade(20)
        .then(function() {
        console.log("Maior que 18");
        })
        .catch(function() {
        console.log("Menor que 18");
        });
 */
const minhaIdade = idade => {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            idade >= 18 ? resolve() : reject();
        }, 1000);
    });
};

minhaIdade(33)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });
//---------------------------------------------------------------------------------------------------
/**
         * 2º Exercício
        Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
        nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
        URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
        URL de exemplo: https://api.github.com/users/seuUsuario
        Basta alterar "diego3g" pelo nome do usuário.
        <input type="text" name="user">
        <button onclick="">Adicionar</button>
        Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
        <ul>
        <li>repo1</li>
        <li>repo2</li>
        <li>repo3</li>
        <li>repo4</li>
        <li>repo5</li>
        </ul>
 */
var inputName = document.getElementById("users");
//var inputEmail = document.getElementById("email");
var dataList = document.querySelector("ul");
const getUserRepo = name => {
    var users = inputName.value;
    if (!users) {
        renderError();
        alert("Preencha o campo");
    }
    renderLoading();
    axios
        .get(`colocar seu usuario`)
        //.get(`https:///api.github.com/${email}`)
        //.get(`https://api.github.com/${user}/repos`)
        //https://api.github.com/users?since=135
        .then(response => {
            fillList(response.data);
        })
        .catch(error => {
            alert("Não foi possível efetuar a busca!");
            renderError(error);
        });
};
//------------------------------------------------------------------------------------------------
/**
         * 3º Exercício
        A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugarda lista apenas enquanto a requisição estiver acontecendo:
        <li>Carregando...</li>
        Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
        Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.
 */
function renderLoading(loading) {
    dataList.innerHTML = "";
    var textElement = document.createTextNode("Carregando...");
    var loadingElement = document.createElement("li");
    loadingElement.appendChild(textElement);
    dataList.appendChild(loadingElement);
}

function renderError(loading) {
    dataList.innerHTML = "";
    var user = inputName.value;
    var msgUserEmpty = !user ? "Preencha o usuário" : "Erro ao efetuar busca";

    var textElement = document.createTextNode(msgUserEmpty);
    var errorElement = document.createElement("li");
    errorElement.style.color = "#F00";
    errorElement.appendChild(textElement);
    dataList.appendChild(errorElement);
}

const fillList = repositorios => {
    console.log("Repositorios", repositorios);
    dataList.innerHTML = "";

    for (repo of repositorios) {
        const reponame = document.createTextNode(repo.name);
        const repoItem = document.createElement("li");

        repoItem.appendChild(reponame);
        dataList.appendChild(repoItem);
    }
};