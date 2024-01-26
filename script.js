function loadGITHUBData() {
    let divGit = document.getElementById('gitScroll');
    let text = '';

    // Verifique se o this.responseText não é undefined
    if (this.responseText) {
        let data = JSON.parse(this.responseText);
        for (let i = 0; i < data.length; i++) {
            text += `
                <div id="gitScroll" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
                <i class="fa-brands fa-github"></i><h4 id="scrollspyHeading1">${data[i].name}</h4>
                    ${data[i].description !== null ? `<p>${data[i].description}</p>` : ''}
                    <a href="${data[i].html_url}" target="_blank">Visit repository on GITHUB</a>
                </div>
            `;
        }
    } else {
        text = "Erro ao obter dados do GitHub.";
    }

    divGit.innerHTML = text;
}

function research() {
    let xhr = new XMLHttpRequest();
    xhr.onload = loadGITHUBData;
    xhr.open('GET', 'https://api.github.com/users/rdkpuc/repos');
    xhr.send();
}

research();
