const baseURL = 'https://famiyesinolusegun.github.io/wdd230/';
const linksURL = 'https://famiyesinolusegun.github.io/wdd230/data/links.json'
const linklist = document.querySelector('#link-list')

async function getLinksData() {
    const response = await fetch(linksURL);
    if (response.ok) {
        const data = await response.json();
        displayLinks(data);
    }
}

getLinksData()

function displayLinks({ weeks }) {
    weeks.forEach(({ week, links }) => {
        const listElement = document.createElement('li');
        listElement.innerText = `${week}: `;
        links.forEach(({ url, title }) => {
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', url);
            linkElement.innerText = `${title} | `;
            listElement.appendChild(linkElement);
        })
        linklist.appendChild(listElement);
    })
}