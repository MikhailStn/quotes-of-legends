import ruChamps from "../champions/ru__Champs.js";
import enChamps from "../champions/en__Champs.js";

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const playVoiceChampBtn = document.getElementById('play-voice-of-champ');
const volumeBtn = document.querySelector('.volume__btn')
const rangeVolume = document.querySelector('.volume__progress')
const btnGoNext = document.querySelector('.button__next')
const inputRange = document.querySelector('.play__progress')
const range = document.querySelector('.play__progress')
const playAgainBtn = document.querySelector('.game__play-again-btn')
const resultList = document.querySelectorAll('.results__item')
const resultsCongrats = document.querySelector('.results__gongrats')

const updateVol = () => {
    rangeVolume.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${rangeVolume.value}%, #c8c8c8 ${rangeVolume.value}%, #c8c8c8 100%)`;
}

const muteVoice = () => {
    if (!volumeBtn.classList.contains('mute')) {
        volumeBtn.classList.add('mute')
        rangeVolume.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${0}%, #c8c8c8 ${0}%, #c8c8c8 100%)`
        rangeVolume.value = 0
    } else {
        volumeBtn.classList.remove('mute')
        rangeVolume.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${100}%, #c8c8c8 ${100}%, #c8c8c8 100%)`
        rangeVolume.value = 100
    }
}

if (volumeBtn) {
    volumeBtn.addEventListener('click', muteVoice)
}


const updateVolBtn = () => {
    if (rangeVolume.value == 0) {
        volumeBtn.classList.add('mute')
    } else {
        volumeBtn.classList.remove('mute')
    }
}


if (rangeVolume) {
    rangeVolume.addEventListener('input', updateVol)
    rangeVolume.addEventListener('input', updateVolBtn)
}



let moves = 0

const checkLang = () => {
    let lang = ''
    if (localStorage.getItem('curr-lang') == 'true') {
        lang = 'true'
    } else if (localStorage.getItem('curr-lang') == 'false') {
        lang = 'false'
    } else if (localStorage.getItem('curr-lang') == 'null') {
        lang = 'true'
    }
    return lang
}

let isRussian = checkLang()


const bgSoundBtn = document.querySelector('.button-volume__bg-sound')
const bgSoundInput = document.querySelector('.input__bg-sound')

if (bgSoundBtn) {
    let bgMusic = new Audio;
    bgMusic.src = './assets/sound/bgmusic.mp3'
    bgMusic.volume = 0.5
    bgMusic.play()
    bgMusic.addEventListener('play', () => {bgSoundBtn.classList.remove('mute'); bgSoundInput.value = 50; bgSoundInput.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 50%, #c8c8c8 50%, #c8c8c8 100%)`})
    bgMusic.addEventListener('ended', () => {bgMusic.play()})
    bgSoundBtn.addEventListener('click', () => {if (!bgSoundBtn.classList.contains('mute')) {bgSoundBtn.classList.add('mute'); bgMusic.pause(); bgSoundInput.value = 0; bgSoundInput.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 0%, #c8c8c8 0%, #c8c8c8 100%)`} else {bgSoundBtn.classList.remove('mute'); bgMusic.play(); bgMusic.volume = 0.5; bgSoundInput.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 50%, #c8c8c8 50%, #c8c8c8 100%)`; bgSoundInput.value = 50}})
    bgSoundInput.addEventListener('input', () => {let vol = bgSoundInput.value; bgMusic.volume = vol / 100; bgSoundInput.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${vol}%, #c8c8c8 ${vol}%, #c8c8c8 100%)`; if (bgSoundInput.value == 0) {bgSoundBtn.classList.add('mute');} else {bgSoundBtn.classList.remove('mute'); bgMusic.play()}})
}


const splash = document.querySelector('.splash')
const champName = document.querySelectorAll('.champ__name')
const champDescription = document.querySelectorAll('.champ__description')

let femaleCharsArr = []
if (isRussian == 'true') {
    for (let i = 0; i < ruChamps.length; i++) {
        if (ruChamps[i].option == 'female') {
            femaleCharsArr.push(ruChamps[i])
        }
    }
} else if (isRussian == 'false')  {
    for (let i = 0; i < enChamps.length; i++) {
        if (enChamps[i].option == 'female') {
            femaleCharsArr.push(enChamps[i])
        }
    }
}

let maleCharsArr = []
if (isRussian == 'true') {
    for (let i = 0; i < ruChamps.length; i++) {
        if (ruChamps[i].option == 'male') {
            maleCharsArr.push(ruChamps[i])
        }
    }
} else if (isRussian == 'false') {
    for (let i = 0; i < enChamps.length; i++) {
        if (enChamps[i].option == 'male') {
            maleCharsArr.push(enChamps[i])
        }
    }
}

let spiritCharsArr = []
if (isRussian == 'true') {
    for (let i = 0; i < ruChamps.length; i++) {
        if (ruChamps[i].option == 'spirit') {
            spiritCharsArr.push(ruChamps[i])
        }
    }
} else if (isRussian == 'false')  {
    for (let i = 0; i < enChamps.length; i++) {
        if (enChamps[i].option == 'spirit') {
            spiritCharsArr.push(enChamps[i])
        }
    }
}

let yordleCharsArr = []
if (isRussian == 'true') {
    for (let i = 0; i < ruChamps.length; i++) {
        if (ruChamps[i].option == 'yordle') {
            yordleCharsArr.push(ruChamps[i])
        }
    }
} else if (isRussian == 'false')  {
    for (let i = 0; i < enChamps.length; i++) {
        if (enChamps[i].option == 'yordle') {
            yordleCharsArr.push(enChamps[i])
        }
    }
}

const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
}

let res = []


const chooseChampFields = document.querySelectorAll('.choose-champ')
let voice = document.querySelector('.audio')
if (voice) {
    voice.addEventListener('play', () => {playVoiceChampBtn.classList.add('pause')})
    voice.addEventListener('pause', () => {playVoiceChampBtn.classList.remove('pause')})
    voice.addEventListener('ended', () => {playVoiceChampBtn.classList.remove('pause')})
    range.addEventListener('input', () => {voice.currentTime = (voice.duration / 100) * range.value;})
    voice.addEventListener('ended', () => {if (chooseChampFields[0].style.opacity != 0.9) {let newLvl = new Audio; newLvl.src = './assets/sound/newlevel.mp3'; newLvl.play()}; chooseChampFields.forEach(el => {el.style.opacity = 0.9; el.style.visibility = 'visible'; el.style.transform = 'scale(1.0)'})})
    setInterval(() => {let percent = (voice.currentTime / voice.duration) * 100; range.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${percent}%, #c8c8c8 ${percent}%, #c8c8c8 100%)`; range.value = percent;}, 20)
    rangeVolume.addEventListener('input', () => {let vol = rangeVolume.value; voice.volume = vol / 100; rangeVolume.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${vol}%, #c8c8c8 ${vol}%, #c8c8c8 100%)`;})
    volumeBtn.addEventListener('click', () => {if (volumeBtn.classList.contains('mute')) {voice.volume = 0} else {voice.volume = rangeVolume.value / 100}})
}

const currentLevelSpan = document.querySelector('.current-level')

const startGame = (champsArr) => {
    moves++
    currentLevelSpan.innerHTML = moves
    inputRange.value = 0;
    btnGoNext.classList.add('disabled')
    btnGoNext.setAttribute('disabled', '')
    let copyOfChamps = champsArr.slice(0)
    let currentChamp = getRandomInt(0, copyOfChamps.length)
    voice.setAttribute('src', `${copyOfChamps[currentChamp].champSoundSrc}`)
    voice.play()
    playVoiceChampBtn.addEventListener('click', () => {
        if (!playVoiceChampBtn.classList.contains('pause')) {
            voice.play()
        } else if (playVoiceChampBtn.classList.contains('pause')) {
            voice.pause()
        }
    })

    let currentLevelChamps = []
    currentLevelChamps.push(copyOfChamps[currentChamp])
    
    if (copyOfChamps[currentChamp].option == 'female') {
        let copyOfFemChamps = femaleCharsArr.slice(0);
        for (let i = 0; i < copyOfFemChamps.length; i++) {
            if (currentLevelChamps[0].champName == copyOfFemChamps[i].champName) {
                copyOfFemChamps.splice(i, 1)
            }
        }
        for (let i = 0; i < 5; i++) {
            let randomNum = getRandomInt(0, copyOfFemChamps.length)
            currentLevelChamps.push(copyOfFemChamps[randomNum])
            copyOfFemChamps.splice(randomNum, 1)
        }
        shuffle(currentLevelChamps)
    } else if (copyOfChamps[currentChamp].option == 'male') {
        let copyOfMaleChamps = maleCharsArr.slice(0);
        for (let i = 0; i < copyOfMaleChamps.length; i++) {
            if (currentLevelChamps[0].champName == copyOfMaleChamps[i].champName) {
                copyOfMaleChamps.splice(i, 1)
            }
        }
        for (let i = 0; i < 5; i++) {
            let randomNum = getRandomInt(0, copyOfMaleChamps.length)
            currentLevelChamps.push(copyOfMaleChamps[randomNum])
            copyOfMaleChamps.splice(randomNum, 1)
        }
        shuffle(currentLevelChamps)
    } else if (copyOfChamps[currentChamp].option == 'spirit') {
        let copyOfSpiritChamps = spiritCharsArr.slice(0);
        for (let i = 0; i < copyOfSpiritChamps.length; i++) {
            if (currentLevelChamps[0].champName == copyOfSpiritChamps[i].champName) {
                copyOfSpiritChamps.splice(i, 1)
            }
        }
        for (let i = 0; i < 5; i++) {
            let randomNum = getRandomInt(0, copyOfSpiritChamps.length)
            currentLevelChamps.push(copyOfSpiritChamps[randomNum])
            copyOfSpiritChamps.splice(randomNum, 1)
        }
        shuffle(currentLevelChamps)
    } else if (copyOfChamps[currentChamp].option == 'yordle') {
        let copyOfYordleChamps = yordleCharsArr.slice(0);
        for (let i = 0; i < copyOfYordleChamps.length; i++) {
            if (currentLevelChamps[0].champName == copyOfYordleChamps[i].champName) {
                copyOfYordleChamps.splice(i, 1)
            }
        }
        for (let i = 0; i < 5; i++) {
            let randomNum = getRandomInt(0, copyOfYordleChamps.length)
            currentLevelChamps.push(copyOfYordleChamps[randomNum])
            copyOfYordleChamps.splice(randomNum, 1)
        }
        shuffle(currentLevelChamps)
    }
    for (let i = 0; i < chooseChampFields.length; i++) {
        chooseChampFields[i].setAttribute('src', `${currentLevelChamps[i].splashShortSrc}`)
        chooseChampFields[i].setAttribute('alt', `${currentLevelChamps[i].champName}`)
    }
    res = []
    res.push(copyOfChamps[currentChamp])
    copyOfChamps.splice(currentChamp, 1)
    res.push(copyOfChamps)
}

if (isRussian == 'true' && inputRange) {
    startGame(ruChamps)
} else if (isRussian =='false' && inputRange) {
    startGame(enChamps)
}


const resultsWrapper = document.querySelector('.results__wrapper')

const startNewGame = () => {
    resultsWrapper.classList.remove('visible')
    headerWrapper.classList.remove('blur')
    main.classList.remove('blur')
    videoBg.classList.remove('blur')
    if (isRussian == 'true') {
        champName.forEach(el => el.innerHTML = '*****')
        champDescription.forEach(el => el.innerHTML = '')
        chooseChampFields.forEach(el => {el.setAttribute('src', ''); el.removeAttribute('style'); el.removeAttribute('alt'); el.classList.remove('correct-item'); el.classList.remove('incorrect-item')})
        splash.removeAttribute('style')
        champDescription[0].innerHTML = 'Прослушайте цитату и выберите чемпиона'
        range.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 0%, #c8c8c8 $0%, #c8c8c8 100%)`; range.value = 0;
        scoreCounter = 5
        stepsCounter = 1
        scoreSpan[1].innerHTML = 0
        moves = 0
        startGame(ruChamps)
    } else if (isRussian == 'false') {
        champName.forEach(el => el.innerHTML = '*****')
        champDescription.forEach(el => el.innerHTML = '')
        chooseChampFields.forEach(el => {el.setAttribute('src', ''); el.removeAttribute('style'); el.removeAttribute('alt'); el.classList.remove('correct-item'); el.classList.remove('incorrect-item')})
        splash.removeAttribute('style')
        champDescription[0].innerHTML = 'Listen to the quote and choose a champion'
        range.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 0%, #c8c8c8 $0%, #c8c8c8 100%)`; range.value = 0;
        scoreCounter = 5
        stepsCounter = 1
        scoreSpan[1].innerHTML = 0
        moves = 0
        startGame(enChamps)
    }
}

if (playAgainBtn) {
    playAgainBtn.addEventListener('click', startNewGame)
}

let champsWrapper = document.querySelector('.champions__images-wrapper')
const headerWrapper = document.querySelector('.header-wrapper')
const main = document.querySelector('.main')
const videoBg = document.querySelector('.background-screen')



let scoreCounter = 5
let stepsCounter = 1
const scoreSpan = document.querySelectorAll('.score__span')

const goNextlevel = () => {
    const chooseChampFields = document.querySelectorAll('.choose-champ')
    let copyOfChamps = res[1]
    champName.forEach(el => el.innerHTML = '*****')
    champDescription.forEach(el => el.innerHTML = '')
    chooseChampFields.forEach(el => {el.removeAttribute('style'); el.removeAttribute('alt'); el.classList.remove('correct-item'); el.classList.remove('incorrect-item')})
    splash.removeAttribute('style')
    if (isRussian == 'true') {
        champDescription[0].innerHTML = 'Прослушайте голос и выберите чемпиона'
    } else if (isRussian == 'false') {
        champDescription[0].innerHTML = 'Listen to the voice and choose a champion'
    }
    range.value = 0
    range.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 0%, #c8c8c8 $0%, #c8c8c8 100%)`
    scoreCounter = 5
    setTimeout(() => {startGame(copyOfChamps)}, 150)
}

if (btnGoNext) {
    btnGoNext.addEventListener('click', goNextlevel)
}

let lastResult = ''

const focusOnChamp = (event) => {
    let target = event.target;
    let champs
    if (isRussian == 'true') {
        champs = ruChamps
    } else if (isRussian == 'false') {
        champs = enChamps
    }
    if (target.classList != 'champions__images-wrapper') {
        if (target.getAttribute('alt') == res[0].champName && !target.classList.contains('correct-item')) {
            target.classList.add('correct-item')
            voice.load()
            playVoiceChampBtn.classList.remove('pause')
            let corrSound = new Audio;
            corrSound.src = './assets/sound/correctchamp.mp3'
            corrSound.play()
            corrSound.volume = 0.1
            for (let i = 0; i < champs.length; i++) {
                if (target.getAttribute('alt') == champs[i].champName) {
                    scoreSpan[1].innerHTML = `${scoreCounter + Number(scoreSpan[1].innerHTML)}`
                    if (stepsCounter == 20 && scoreSpan[1].innerHTML != 100) {
                        splash.style.background = `url('${champs[i].splashSrc}')`
                        champName[0].innerHTML = `${champs[i].champName}`
                        champDescription[0].innerHTML = `${champs[i].champDescription}`
                        champName[1].innerHTML = `${champs[i].champName}`
                        champDescription[1].innerHTML = `${champs[i].champDescription}`
                        btnGoNext.classList.remove('disabled')
                        btnGoNext.removeAttribute('disabled')
                        scoreCounter++
                        stepsCounter++
                        resultsWrapper.classList.add('visible')
                        headerWrapper.classList.add('blur')
                        main.classList.add('blur')
                        videoBg.classList.add('blur')
                        if (isRussian == 'true') {
                            resultsCongrats.innerHTML = `Вы завершили игру со счетом:  ${document.querySelectorAll('.score__span')[1].innerHTML} / 100 <br>Начать игру заново?`
                        } else if (isRussian == 'false') {
                            resultsCongrats.innerHTML = `You completed the game with score:  ${document.querySelectorAll('.score__span')[1].innerHTML} / 100 <br>Start new game?`
                        }
                        lastResult = `Score: ${document.querySelectorAll('.score__span')[1].innerHTML} / 100`
                        if (resultList[0] == '') {
                            resultList[0].innerHTML = lastResult
                        } else {
                            resultList[9].innerHTML = resultList[8].innerHTML
                            resultList[8].innerHTML = resultList[7].innerHTML
                            resultList[7].innerHTML = resultList[6].innerHTML
                            resultList[6].innerHTML = resultList[5].innerHTML
                            resultList[5].innerHTML = resultList[4].innerHTML
                            resultList[4].innerHTML = resultList[3].innerHTML
                            resultList[3].innerHTML = resultList[2].innerHTML
                            resultList[2].innerHTML = resultList[1].innerHTML
                            resultList[1].innerHTML = resultList[0].innerHTML
                            resultList[0].innerHTML = lastResult
                        }
                        break
                    } else if (stepsCounter == 20 && scoreSpan[1].innerHTML == 100) {
                        splash.style.background = `url('${champs[i].splashSrc}')`
                        champName[0].innerHTML = `${champs[i].champName}`
                        champDescription[0].innerHTML = `${champs[i].champDescription}`
                        champName[1].innerHTML = `${champs[i].champName}`
                        champDescription[1].innerHTML = `${champs[i].champDescription}`
                        btnGoNext.classList.remove('disabled')
                        btnGoNext.removeAttribute('disabled')
                        scoreCounter++
                        stepsCounter++
                        resultsWrapper.classList.add('visible')
                        headerWrapper.classList.add('blur')
                        main.classList.add('blur')
                        videoBg.classList.add('blur')
                        lastResult = `Score: 100 / 100`
                        if (isRussian == 'true') {
                            resultsCongrats.innerHTML = 'Поздравляю! Вы завершили игру со счетом 100 / 100'
                        } else if (isRussian == 'false') {
                            resultsCongrats.innerHTML = 'Congratulations! You completed the game with score: 100 / 100'
                        }
                        if (resultList[0] == '') {
                            resultList[0].innerHTML = lastResult
                        } else {
                            resultList[9].innerHTML = resultList[8].innerHTML
                            resultList[8].innerHTML = resultList[7].innerHTML
                            resultList[7].innerHTML = resultList[6].innerHTML
                            resultList[6].innerHTML = resultList[5].innerHTML
                            resultList[5].innerHTML = resultList[4].innerHTML
                            resultList[4].innerHTML = resultList[3].innerHTML
                            resultList[3].innerHTML = resultList[2].innerHTML
                            resultList[2].innerHTML = resultList[1].innerHTML
                            resultList[1].innerHTML = resultList[0].innerHTML
                            resultList[0].innerHTML = lastResult
                        }
                        playAgainBtn.style.display = 'none'
                        break
                    } else {
                        splash.style.background = `url('${champs[i].splashSrc}')`
                        champName[0].innerHTML = `${champs[i].champName}`
                        champDescription[0].innerHTML = `${champs[i].champDescription}`
                        champName[1].innerHTML = `${champs[i].champName}`
                        champDescription[1].innerHTML = `${champs[i].champDescription}`
                        btnGoNext.classList.remove('disabled')
                        btnGoNext.removeAttribute('disabled')
                        scoreCounter++
                        stepsCounter++
                        break
                    }
                }
            }
        } else if (target.classList.contains('correct-item')) {
            for (let i = 0; i < champs.length; i++) {
                if (target.getAttribute('alt') == champs[i].champName) {
                    champName[1].innerHTML = `${champs[i].champName}`
                    champDescription[1].innerHTML = `${champs[i].champDescription}`
                }
            }
        } else if (target.classList.contains('incorrect-item')) {
            for (let i = 0; i < champs.length; i++) {
                if (target.getAttribute('alt') == champs[i].champName) {
                    champName[1].innerHTML = `${champs[i].champName}`
                    champDescription[1].innerHTML = `${champs[i].champDescription}`
                }
            }
        } else if (champName[0].innerHTML != '*****') {
            for (let i = 0; i < champs.length; i++) {
                if (target.getAttribute('alt') == champs[i].champName) {
                    champName[1].innerHTML = `${champs[i].champName}`
                    champDescription[1].innerHTML = `${champs[i].champDescription}`
                }
            }
        } else {
            target.classList.add('incorrect-item')
            scoreCounter--
            let corrSound = new Audio;
            corrSound.src = './assets/sound/wrongchamp.mp3'
            corrSound.play()
            corrSound.volume = 0.1
            for (let i = 0; i < champs.length; i++) {
                if (target.getAttribute('alt') == champs[i].champName) {
                    champName[1].innerHTML = `${champs[i].champName}`
                    champDescription[1].innerHTML = `${champs[i].champDescription}`
                }
            }
        }
    }
}

if (champsWrapper) {
    champsWrapper.addEventListener('click', focusOnChamp)
}


window.addEventListener('beforeunload', () => {
    localStorage.setItem('res1', resultList[0].innerHTML)
    localStorage.setItem('res2', resultList[1].innerHTML)
    localStorage.setItem('res3', resultList[2].innerHTML)
    localStorage.setItem('res4', resultList[3].innerHTML)
    localStorage.setItem('res5', resultList[4].innerHTML)
    localStorage.setItem('res6', resultList[5].innerHTML)
    localStorage.setItem('res7', resultList[6].innerHTML)
    localStorage.setItem('res8', resultList[7].innerHTML)
    localStorage.setItem('res9', resultList[8].innerHTML)
    localStorage.setItem('res10', resultList[9].innerHTML)
})

window.addEventListener('load', () => {
    if (resultList[0]) {
        resultList[0].innerHTML = localStorage.getItem('res1')
        resultList[1].innerHTML = localStorage.getItem('res2')
        resultList[2].innerHTML = localStorage.getItem('res3')
        resultList[3].innerHTML = localStorage.getItem('res4')
        resultList[4].innerHTML = localStorage.getItem('res5')
        resultList[5].innerHTML = localStorage.getItem('res6')
        resultList[6].innerHTML = localStorage.getItem('res7')
        resultList[7].innerHTML = localStorage.getItem('res8')
        resultList[8].innerHTML = localStorage.getItem('res9')
        resultList[9].innerHTML = localStorage.getItem('res10')
    }
})

export default lastResult