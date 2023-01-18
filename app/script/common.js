

// about application

const appButton = document.querySelector('.item__application')
const appBg = document.querySelector('.about__bg')
const aboutApp = document.querySelector('.about')
const closeAppBtn = document.querySelector('.about__button')
const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const video = document.querySelector('.background-screen')
const wrappers = document.querySelectorAll('.wrapper')

const showAboutApp = () => {
    aboutApp.classList.add('visible')
    wrappers.forEach(el => el.classList.add('blur'))
    video.classList.add('blur')
}

const hideAboutApp = () => {
    aboutApp.classList.remove('visible')
    wrappers.forEach(el => el.classList.remove('blur'))
    video.classList.remove('blur')
}

if (appButton) {
    appButton.addEventListener('click', showAboutApp)
    appBg.addEventListener('click', hideAboutApp)
    closeAppBtn.addEventListener('click', hideAboutApp)
}


// move to results


const resultsBtn = document.getElementById('results-btn')
const game__resultsBtn = document.querySelectorAll('.game__results-btn')
const resultsPage = document.querySelector('.results__wrapper')
const closeResultPageBtn = document.querySelector('.results__close-btn')
const resBg = document.querySelector('.results__bg')

const openResultPage = () => {
    document.location = '../app/results.html'
}

if (resultsBtn) {
    resultsBtn.addEventListener('click', openResultPage)
}

if (game__resultsBtn[0]) {
    game__resultsBtn.forEach(el => el.addEventListener('click', openResultPage))
}

// move to start page

const startPageBtn = document.getElementById('start-page-btn')
const game__startPageBtn = document.getElementById('game__start-page-btn')

const openStartPage = () => {
    document.location = '../app/start-page.html'
}

if (startPageBtn) {
    startPageBtn.addEventListener('click', openStartPage)
}

if (game__startPageBtn) {
    game__startPageBtn.addEventListener('click', openStartPage)
}

// move to gamePage

const startGameBtn = document.getElementById('start-game-btn')

const goToGame = () => {
    document.location = '../app/game.html'
}

if (startGameBtn) {
    startGameBtn.addEventListener('click', goToGame)
}

const bg = document.getElementById('bg-game-screen')

const goMainPageBtn = document.querySelector('.question-btn-main')
const goGalleryPageBtn = document.querySelector('.question-btn-gallery')
const exitWrappers = document.querySelectorAll('.exit-game__wrapper')
const stPageBtn = document.querySelector('.start-page-btn')
const headerWrapper = document.querySelector('.header-wrapper')
const main = document.querySelector('.main')
const videoBg = document.querySelector('.background-screen')
const cancelBtns = document.querySelectorAll('.cancel-btn')
const goResultBtn = document.querySelector('.result-page-btn')

if (goMainPageBtn) {
        goMainPageBtn.addEventListener('click', () => {
            exitWrappers[0].classList.remove('hidden')
            headerWrapper.classList.add('blur')
            main.classList.add('blur')
            videoBg.classList.add('blur')
    })
}

if (stPageBtn) {
    stPageBtn.addEventListener('click', () => {
        document.location = '../app/start-page.html'
    })
}

if (cancelBtns[0]) {
    cancelBtns.forEach(el => el.addEventListener('click', () => {
            exitWrappers.forEach(el => el.classList.add('hidden'))
            headerWrapper.classList.remove('blur')
            main.classList.remove('blur')
            videoBg.classList.remove('blur')
    }))
}

if (goGalleryPageBtn) {
    goGalleryPageBtn.addEventListener('click', () => {
        exitWrappers[1].classList.remove('hidden')
        headerWrapper.classList.add('blur')
        main.classList.add('blur')
        videoBg.classList.add('blur')
    })
}

if (goResultBtn) {
    goResultBtn.addEventListener('click', () => {
        document.location = '../app/gallery.html'
    })
}

const exitGameBg = document.querySelectorAll('.exit-game-bg')

if (exitGameBg[0]) {
    exitGameBg.forEach(el => el.addEventListener('click', () => {
            exitWrappers[0].classList.add('hidden')
            exitWrappers[1].classList.add('hidden')
            headerWrapper.classList.remove('blur')
            main.classList.remove('blur')
            videoBg.classList.remove('blur')
    }))
}

// gallery

const showGalleryBtn = document.querySelector('.button__gallery')
const galleryWrapper = document.querySelector('.gallery__wrapper')
const bgGallery = document.querySelector('.gallery__bg')
const closeGalleryBtn = document.querySelector('.gallery__close-btn')
const galleryContainer = document.querySelector('.gallery__container')

const openGalleryPage = () => {
    document.location = '../app/gallery.html'
}


if (showGalleryBtn) {
    showGalleryBtn.addEventListener('click', openGalleryPage)
}

if (bgGallery) {
    bgGallery.addEventListener('click', hideGallery)
}

if (closeGalleryBtn) {
    closeGalleryBtn.addEventListener('click', hideGallery)
}
