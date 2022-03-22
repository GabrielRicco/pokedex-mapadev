// Ao clicar no pokemon da listagem, temos que esconder o card do pokemon aberto e mostrar o card ao pokemon clicado
const selectlist = document.querySelectorAll('.pokemon')

const cardspokemon = document.querySelectorAll('.cartao-pokemon')

selectlist.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const closeCard = document.querySelector('.aberto')
        closeCard.classList.remove('aberto')

        const idPokemon = pokemon.attributes.id.value

        const openCard = document.getElementById('cartao-' + idPokemon)
        openCard.classList.add('aberto')

        const changePoke = document.querySelector('.ativo')
        changePoke.classList.remove('ativo')

        const newPoke = document.getElementById(idPokemon)
        newPoke.classList.add('ativo')
    })
})