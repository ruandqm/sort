//Código para fazer com que a tecla "Enter" também acione a função
document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        var btn = document.querySelector("#submit");

        btn.click();

    }
});

//Mensagem de Erro Padrão
const erro = "<h5><span style='color: red'>Desculpe, o campo não pode estar vazio ou conter letras.</span></h5>"
document.getElementById("result").innerHTML = erro

//Função baseada em SelectionSort que faz a ordenação crescente do vetor
function sort() {

    let numbers = document.querySelector("#numbers")
    let values = numbers.value

    input = JSON.parse("[" + values + "]");

    for (let i = 0; i < input.length; i++) {
        let menor = i;
        for (let j = i + 1; j < input.length; j++) {
            if (input[j] < input[menor]) {
                menor = j;
            }
        }
        if (menor != i) {
            let iHandler = input[i];
            input[i] = input[menor];
            input[menor] = iHandler;
        }
    }

    let sorted = input

    console.log(sorted.length)

    //Envia o vetor ordenado para o popup
    if (sorted.length === 0) {
        document.getElementById("result").innerHTML = erro
    }
    else {
        document.getElementById("result").innerHTML = "<h3>" + sorted + "</h3>"
    }

}

// Trecho responsável pela exibição do Popup com o vetor ordenado

let pops = document.getElementsByClassName("pop")
let popup = document.querySelector(".popup-wrapper")
let popupClose = document.querySelector(".popup-close")

pops[0].addEventListener('click', () => {
    popup.style.display = 'block'
})

for (let pop of pops) {
    pop.addEventListener('click', () => {
        popup.style.display = 'block'
    })
}
popup.addEventListener('click', () => {
    popup.style.display = 'none'
})

popupClose.addEventListener('click', () => {
    document.getElementById("numbers").value = ''
    document.getElementById("result").innerHTML = erro
    popup.style.display = 'none'
})