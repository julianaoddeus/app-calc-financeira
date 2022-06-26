let salario = document.querySelector('#salario')

function calcularEssecial() {    

    let essencial = (salario.value * 0.5 );     
    document.querySelector('#gastoEssencial').innerHTML = essencial
}

function calcularEducacao() { 

    let educacao = (salario.value * 0.05 );     
    document.querySelector('#gastoEducacao').innerHTML = educacao
}

function calcularRecompensa() {   

    let recompensa = (salario.value * 0.1 );     
    document.querySelector('#gastoRecompensa').innerHTML = recompensa
}

function calcularMetas() {    

    let metas = (salario.value * 0.2 );     
    document.querySelector('#gastoMetas').innerHTML = metas
}

document.querySelector('#btn-calcular').addEventListener('click', () =>{
    calcularEssecial()
    calcularEducacao()
    calcularRecompensa()
    calcularMetas()
    salario.innerHTML = " "
})