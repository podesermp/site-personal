document.querySelectorAll('a').forEach(link =>{
    const conteudo = document.querySelector("#conteudo")
    link.onclick = function(e){
        e.preventDefault()
        fetch(link.getAttribute('href'))
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
    }
})

const conteudo = document.querySelector("#conteudo")
const init = document.querySelector("#init")
const loadPage = () => {
    fetch(init.getAttribute('href'))
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
}