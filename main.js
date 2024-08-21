const valorA = document.getElementById('valorA')
const valorB = document.getElementById('valorB')

const form = document.querySelector("form")
const divMessage = document.querySelector(".alert")

function ativar() {
    const message = document.createElement("div")
    message.classList.add("message")

    const numA = Number(valorA.value)
    const numB = Number(valorB.value)

    if (numA >= numB) {
        message.innerText = `O valor ${numB} deve ser maior que ${numA}`
        message.classList.add("errorMessage")
        valorA.style.border = '1px solid red'
    } else {
        message.innerText = `Tudo certo! ${numB} é maior que ${numA}.`
        valorA.style.border = ''
    }
    valorA.value = ""
    valorB.value = ""
    divMessage.appendChild(message)

    setTimeout(() => {
        message.style.display = "none"
    }, 3000)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    ativar()
})