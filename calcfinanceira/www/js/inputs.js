(()=>{
    const criarTarefa = (event) => {
    event.preventDefault();

    let lista = document.querySelector('[data-list]')
    let input = document.querySelector('[data-form-despesa]').value;
    let valor = document.querySelector('[data-form-valor]').value;

    //criando li no html via DOM
    const tarefa = document.createElement('li');

   
    //adicionando uma classe ao li
    tarefa.classList.add('task')
    const conteudo = `<br><p class="content">${input}  - R$ ${valor}</p>`;
 
    tarefa.innerHTML = conteudo;

    //identificando que o li (tarefa) é filho do ul
    lista.appendChild(tarefa);
    //inserindo botão no campo da <li>   
    tarefa.appendChild(BotaoDeleta())
    input.value = ' '

}




const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'x'
    botaoDeleta.addEventListener('click', deletarTarefa)
    botaoDeleta.classList.add('btn','btn-danger', 'btn-del')   

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