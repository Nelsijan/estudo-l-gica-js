const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let resposta = ""

    for (let i = 0; i <= 10; i = i + 1) {
        resposta = resposta + numero + "x" + i + "=" + (numero * i) + "\n"
        // resposta = `${resposta}${numero} x ${i} = ${numero *1}\n`
    }
    resp.innerText = resposta
})