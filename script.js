let nome = document.getElementById('nick')

nome.addEventListener('input', () =>{
    console.log(nome.value);
    if(nome.value.length > 1){
        document.getElementById('fulano').innerHTML = nome.value
    }
})


let valorNumerico
let select = document.getElementById('selecao')
let comecar = document.getElementById('comecar')
const adivinhar = () =>
{
    
    if(select.value == 1)
    {
        valorNumerico = (Math.random() * 11).toFixed(0)
        console.log(valorNumerico)
    }
    else if(select.value == 2)
    {
        valorNumerico = (Math.random() * 101).toFixed(0)
        console.log(valorNumerico);
    }
    else
    {
        valorNumerico = (Math.random() * 201).toFixed(0)
        console.log(valorNumerico);
    }
}

comecar.addEventListener('click', adivinhar)

let contador = 3
let oNumeroE = document.getElementById('oNumeroE')
let numero = document.getElementById('numero')
let jogar = document.getElementById('jogar')
let parabens = 2
const acertar = () =>
{

    if(valorNumerico == numero.value)
    {
        tentativas.innerHTML = 'Parabéns, você conseguiu adivinhar!'
        oNumeroE.innerHTML = ''
        parabens--
    }
    else if(valorNumerico < numero.value)
    {
        oNumeroE.innerHTML = 'O número é menor!'
        contador--
        tentativas.innerHTML = `Você ainda tem ${contador} tentativas!`
    }
    else
    {
        oNumeroE.innerHTML = 'O número é maior!'
        contador--
        tentativas.innerHTML = `Você ainda tem ${contador} tentativas!`
    }
    
    if(contador == 0)
    {
        tentativas.innerHTML = 'Esgotaram suas tentativas!'
        jogar.innerHTML = 'Recomeçar?'
    }

    if( contador == -1)
    {
        document.location.reload()
    }
    console.log(valorNumerico);

    if(parabens == 1)
    {
        jogar.innerHTML = 'Recomeçar?'
    }
    
    if(parabens == 0)
    {
        document.location.reload()
    }
}

jogar.addEventListener('click', acertar)




