let pesquisaPersonagem = document.getElementById('pesquisaPersonagem');
pesquisaPersonagem.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        // event.preventDefault();
        let pesquisaPersonagem = document.getElementById('pesquisaPersonagem');
        let containerPersonagens = document.getElementById('containerPersonagens');
        pesquisaPersonagem = pesquisaPersonagem.value;
        // btnAdvice.innerHTML = `<lottie-player src="https://assets5.lottiefiles.com/packages/lf20_20lywwls.json"  background="transparent"  speed="1"  style="width: 3em; height: 3em;"  loop  autoplay></lottie-player>`

        containerPersonagens.innerHTML = '';

        fetch(`https://rickandmortyapi.com/api/character/?name=${pesquisaPersonagem}&status=alive`).then((data) => {
            data.json().then((resp) => {
                resp = resp.results;
                resp.forEach(e => {
                    console.log(resp)
                    containerPersonagens.innerHTML += `
                    <div id="${e.id}" class="card-character">
                        <img src="${e.image}" alt="">
                        <h3>${e.name}</h3>
                    </div>
                    `;
                });
            })
        })
    }
});