const BASE_URL = "https://rickandmortyapi.com/api/character/"

const getCharacters = async () => {
    const response = await fetch(BASE_URL)
    const data = await response.json()
    return data.results
}

const drawCard = ({ image, name, location, status }) => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
        <img src="${image}" alt="${name}">
        <div class="details"> 
            <div class="title">
                <h2>${name}</h2>
            </div>
            <div class="location">
                <p>Last location:</p>
                <h3>${location.name}</h3>
            </div>         
        </div>
        <button>Ver detalle</button>
        <div class="status ${status === 'Dead' ? 'dead' : status == 'unknown' && 'unknown'}">${status}</div>
    `
    return card
}

const drawModal = async (character) => {
    const modalBg = document.createElement('div')
    modalBg.classList.add('modal-background')
    document.body.appendChild(modalBg)

    const modalContainer = document.querySelector('.modal-container')

    modalContainer.style.visibility = 'visible'
    modalContainer.style.opacity = 1


    modalContainer.querySelector('.modal-image > img').src = character.image
    modalContainer.querySelector('.modal-image > img').alt = character.name
    modalContainer.querySelector('.modal-image > h2').textContent = character.name
    modalContainer.querySelectorAll('.modal-extras > ul > li > span')[0].textContent = character.location.name
    modalContainer.querySelectorAll('.modal-extras > ul > li > span')[1].textContent = character.gender
    modalContainer.querySelectorAll('.modal-extras > ul > li > span')[2].textContent = character.origin.name
    modalContainer.querySelectorAll('.modal-extras > ul > li > span')[3].textContent = character.species


    modalBg.addEventListener('click', () => {
        modalBg.remove()
        modalContainer.style.visibility = 'hidden'
        modalContainer.style.opacity = 0
    })

    modalContainer.querySelector('.close').addEventListener('click', () => {
        modalBg.remove()
        modalContainer.style.visibility = 'hidden'
        modalContainer.style.opacity = 0
    })
}

const drawCards = (characters) => {
    const container = document.querySelector('#rick-and-morty')
    characters.forEach(character => {
        const card = drawCard(character)
        container.appendChild(card)
        card.querySelector('button').addEventListener('click', () => {
            drawModal(character)
        })
    });
}

const init = async () => {
    const characters = await getCharacters()
    drawCards(characters)
}

init()
