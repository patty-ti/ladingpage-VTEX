const formulario = document.getElementById('formulario')

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let data = {
        name,
        email,
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData);
    
    let content = document.getElementById('content');
    let carregando = `<b> carregando ... </b>`;
    content.innerHTML = carregando

    let cadastrado = `<b> Cadastro efetuado com sucesso! </b>`;
    setTimeout(() => {
    content.innerHTML = cadastrado
    }), 1100
})