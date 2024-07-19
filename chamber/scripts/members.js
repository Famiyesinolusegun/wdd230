function loadMemberDirectory() {
    const memberContainer = document.getElementById("member-container");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");

    fetch("data/members.json")
        .then(response => response.json())
        .then(members => displayMembers(members))
        .catch(error => console.error('Error loading members:', error));

    gridViewBtn.addEventListener("click", () => toggleView('grid'));
    listViewBtn.addEventListener("click", () => toggleView('list'));

    function displayMembers(members) {
        memberContainer.innerHTML = members.map(member => `
            <div class="member-card">
                <img src="/wdd230/chamber${member.image}" alt="${member.name}">
                <h4>${member.name}</h4>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membership_level}</p>
            </div>
        `).join('');
    }

    function toggleView(view) {
        memberContainer.className = view;
        gridViewBtn.classList.toggle('active', view === 'grid');
        listViewBtn.classList.toggle('active', view === 'list');
    }
}


GetCompanies();

//buttons
const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');


gridbutton.addEventListener('click', () => {
    mainElement.classList.add('grid');
    mainElement.classList.remove('list');
});

listbutton.addEventListener('click', () => {
    mainElement.classList.add('list');
    mainElement.classList.remove('grid');
});


// hamburguer button
const hButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hButton.classList.toggle('open');
})
