import ruChamps from "../champions/ru__Champs.js"
import enChamps from "../champions/en__Champs.js"

const champsContainer = document.querySelector('.champs__container')
let audios = []
let buttonsPlay = []
let isRussian = localStorage.getItem('curr-lang')
const closeGallery = document.querySelector('.gallery__close-btn')
const galleryBg = document.querySelector('.gallery__bg')

if (closeGallery) {
    closeGallery.addEventListener('click', () => audios.forEach(el => {el.pause(); buttonsPlay.forEach(el => el.classList.remove('pause'))}))
}

if (galleryBg) {
    galleryBg.addEventListener('click', () => audios.forEach(el => {el.pause(); buttonsPlay.forEach(el => el.classList.remove('pause'))}))
}

const createChamps = () => {
    let arr = []
    if (localStorage.getItem('curr-lang') == 'true' || localStorage.getItem('curr-lang') == 'false') {
        if (isRussian == 'true') {
            arr = ruChamps
        } else if (isRussian == 'false') {
            arr = enChamps
        } 
    } else {
        isRussian = true
        arr = ruChamps
    }
    for (let i = 0; i < arr.length; i++) {
        let champWrapper = document.createElement('div');
        champWrapper.classList = 'gallery__champ'
        champsContainer.append(champWrapper)
        let champ = document.createElement('div')
        champ.classList = 'champ'
        let playerWrapper = document.createElement('div')
        playerWrapper.classList = 'gallery__player-wrapper'
        champWrapper.append(champ, playerWrapper)
        let champSplashWrapper = document.createElement('div')
        champSplashWrapper.classList = 'champ__splash-wrapper'
        let champInfoWrapper = document.createElement('div')
        champInfoWrapper.classList = 'champ__info-wrapper'
        champ.append(champSplashWrapper, champInfoWrapper)

        let champSplash = document.createElement('img')
        champSplash.classList = 'champ__splash'
        champSplashWrapper.append(champSplash)
        champSplash.setAttribute('src', `${arr[i].splashSrc}`)

        let champName = document.createElement('h2')
        champName.classList = 'champ__name'
        let champDescription = document.createElement('p')
        champDescription.classList = 'champ__info'
        champInfoWrapper.append(champName, champDescription)
        champName.innerHTML = `${arr[i].champName}`
        champDescription.innerHTML = `${arr[i].champDescription}`

        let buttonPlayVoice = document.createElement('button')
        buttonPlayVoice.classList = 'play-voice'
        buttonsPlay.push(buttonPlayVoice)
        let voiceProgress = document.createElement('input')
        voiceProgress.classList = 'voice-progress'
        voiceProgress.type = 'range'
        voiceProgress.value = 0
        voiceProgress.min = 0
        voiceProgress.max = 100
        voiceProgress.step = 1
        playerWrapper.append(buttonPlayVoice, voiceProgress)
        let voiceOfChamp = new Audio;
        voiceOfChamp.src = `${arr[i].champSoundSrc}`
        audios.push(voiceOfChamp)

        buttonPlayVoice.addEventListener('click', () => {
            if (!buttonPlayVoice.classList.contains('pause')) {
                audios.forEach(el => el.pause())
                buttonsPlay.forEach(el => el.classList.remove('pause'))
                voiceOfChamp.play()
                buttonPlayVoice.classList.add('pause')
            } else if (buttonPlayVoice.classList.contains('pause')) {
                voiceOfChamp.pause()
                buttonPlayVoice.classList.remove('pause')
            }
        })

        voiceProgress.addEventListener('input', () => {voiceOfChamp.currentTime = (voiceOfChamp.duration / 100) * voiceProgress.value;})

        voiceOfChamp.addEventListener('ended', () => {
            buttonPlayVoice.classList.remove('pause')
        })
        setInterval(() => {let percent = (voiceOfChamp.currentTime / voiceOfChamp.duration) * 100; voiceProgress.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${percent}%, #c8c8c8 ${percent}%, #c8c8c8 100%)`; voiceProgress.value = percent;}, 20)
    }

}

if (champsContainer) {
    createChamps()
}