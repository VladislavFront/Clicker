let clickArea = document.querySelector('.click-area')

let lvlCountArea  = document.querySelector('.lvl-count')
let goldCountArea = document.querySelector('.gold-count')

let lvlCount  = 1
let goldCount = 0

let btnLvlUp = document.querySelector('.lvlUp')

lvlCountArea.innerHTML = 'Уровень: ' + lvlCount
goldCountArea.innerHTML = 'Монет: ' + goldCount

clickArea.addEventListener('click', () => {
    goldCount = goldCount + 1

    lvlCountArea.innerHTML = 'Уровень: ' + lvlCount
    goldCountArea.innerHTML = 'Монет: ' + goldCount
})

function lvlUP () {
    if (goldCount >= 100) {
        goldCount = goldCount - 100
        lvlCount = lvlCount + 1

        lvlCountArea.innerHTML = 'Уровень: ' + lvlCount
        goldCountArea.innerHTML = 'Монет: ' + goldCount
    }
    else {
        alert('У Вас нет 100 монет')
    }
}