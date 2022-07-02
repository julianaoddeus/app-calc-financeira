let salario = document.querySelector('#salario');


document.querySelector('#btn-calcular').addEventListener('click', () => {
    gastosFixos()
    educacao()
    recompensa()
    aposentadoria()
    metas()
    
})

const gastosFixos = () => {
    let valor = salario.value * 0.5   
    document.querySelector('#gastos-fixos').innerHTML = `<p class="text-center">R$${valor}</p>`
}


const educacao = () => {
    let valor = salario.value * 0.05    
    document.querySelector('#educacao').innerHTML = `<p class="text-center">R$${valor}</p>`
}
const recompensa = () => {
    let valor = salario.value * 0.1    
    document.querySelector('#recompensa').innerHTML = `<p class="text-center">R$${valor}</p>`
}
const aposentadoria = () => {
    let valor = salario.value * 0.1    
    document.querySelector('#aposentadoria').innerHTML = `<p class="text-center">R$${valor}</p>`
}

const metas = () => {
    let valor = salario.value * 0.2    
    document.querySelector('#metas').innerHTML = `<p class="text-center">R$${valor}</p>`
}

