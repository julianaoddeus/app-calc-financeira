(()=>{
    const criarTarefa = (event) => {
    event.preventDefault();

    let lista = document.querySelector('[data-list]')
    let input = document.querySelector('[data-form-input]').value;

    //criando li no html via DOM
    const tarefa = document.createElement('li');

    //adicionando uma classe ao li
    tarefa.classList.add('task')
    const conteudo = `<br><p class="list-group-item">${input}</p>`;

    tarefa.innerHTML = conteudo;

    //identificando que o li (tarefa) é filho do ul
    lista.appendChild(tarefa);
    //inserindo botão no campo da <li>
    tarefa.appendChild(BotaoConcluir())
    tarefa.appendChild(BotaoDeleta())
    input.value = ' '

}

const BotaoConcluir = () => {
    //criando o botão dinâmicamente
    const botaoConclui = document.createElement('button')

    //Adicionando uma classe ao botão
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'Concluir'; // nome do botão criado
    botaoConclui.addEventListener('click',concluirTarefa)
    botaoConclui.classList.add('btn','btn-danger', 'm-1')
 

    return botaoConclui;
}

//Função para efeito tracejado na tarefa
const concluirTarefa = (event) => {
    //buscanco o evento click
    const botatoConclui = event.target

    //pegando o elemento pai que é a <li>
    const tarefaCompleta = botatoConclui.parentElement

    //colocando o efeito de rabisco na <li>
    tarefaCompleta.classList.toggle('done')
}

const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'Deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)
    botaoDeleta.classList.add('btn','btn-danger')
   

    return botaoDeleta
}

const deletarTarefa = (event) => {
    const botaoDeleta = event.target

    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove()

    return botaoDeleta
}
//botão novo Item
document.querySelector('[data-form-button]').addEventListener('click', criarTarefa)
})()