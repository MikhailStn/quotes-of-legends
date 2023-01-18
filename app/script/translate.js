const i18Obj = {
    'EN': {
        'about': `This application uses the intellectual property of <a class="about__link" href="https://www.riotgames.com/en" target="_blank">Riot Games</a>.<br>Riot Games allows its IP to be used without additional permission as long as the content is not being used to make money.<br>You can read more about the terms of use of IP <a class="about__link" href="https://ru.leagueoflegends.com/ru/legal/jibber-jabber" target="_blank">here</a>`,
        'about-ps': 'P.S. I am a fan of the universe of the game, the idea of application is to introduce other developers to the Lore of League of Legends',
        'about-btn': 'Got it',
        'main-page': 'Start Page',
        'results': 'Results',
        'about-app': 'About app',
        'welcome': 'Welcome to Quotes of Legends!',
        'guess': 'Guess which champion in the <a class="lol-link" href="https://www.leagueoflegends.com" target="_blank">League of Legends</a> universe the quote belongs to!',
        'play-btn': 'Start game',
        'gallery-btn': 'Champions gallery',
        'play': 'Play again',
        'to-results': 'Results',
        'to-main': 'To main page',
        'quit-game': 'Are you sure you want to quit? Progress will be lost',
        'agree': 'Ok',
        'cancel': 'Cancel',
        'bg-music': 'Music:',
        'next': 'Next',
        'score': 'Score: ',
        'max-score': 'Congratulations! You completed the game with score: 100 / 100',
        'listen-champ': 'Listen to the quote and choose a champion',
        'statistics': 'Game Stats',
        'gallery': 'Gallery',
        'level': 'Progress:',
        'res': 'Latest games'
    },
    'RU': {
        'about': `В данном приложении используются интеллектуальная собственность <a class="about__link" href="https://www.riotgames.com/en" target="_blank">Riot Games</a>.<br>Riot Games разрешает использовать свою ИС без дополнительного разрешения, если контент не используется в целях заработка.<br>Подробнее об условиях использования ИС можно прочитать <a class="about__link" href="https://ru.leagueoflegends.com/ru/legal/jibber-jabber" target="_blank">здесь</a>`,
        'about-ps': 'P.S. Я являюсь поклонником вселенной игры, идея данного приложения в том, чтобы познакомить других разработчиков с частью ЛОРА Лиги Легенд',
        'about-btn': 'Понятно',
        'main-page': 'Главная страница',
        'results': 'Результаты',
        'about-app': 'О приложении',
        'welcome': 'Добро пожаловать в Quotes of Legends!',
        'guess': 'Угадай, какому чемпиону вселенной <a class="lol-link" href="https://www.leagueoflegends.com" target="_blank">League of Legends</a> принадлежит цитата!',
        'play-btn': 'Играть',
        'gallery-btn': 'Галерея чемпионов',
        'play': 'Играть',
        'to-results': 'Результаты',
        'to-main': 'На главную',
        'quit-game': 'Покинуть игру? Прогресс будет утерян',
        'agree': 'Ок',
        'cancel': 'Отмена',
        'bg-music': 'Фон:',
        'next': 'Дальше',
        'score': 'Счет: ',
        'max-score': 'Поздравляю! Вы завершили игру со счетом:  100 / 100',
        'listen-champ': 'Прослушайте цитату и выберите чемпиона',
        'statistics': 'Статистика игр',
        'gallery': 'Галерея',
        'level': 'Уровень:',
        'res': 'Статистика игр'
    }
}

const btnRu = document.querySelector('.btn__ru')
const btnEn = document.querySelector('.btn__en')
const allStrings = document.querySelectorAll('[data-i18]');
let isRussian = true

const getTranslate = (lang) => {
    allStrings.forEach(el => el.innerHTML = i18Obj[lang][el.dataset.i18]);
}

const a = (event) => {
    getTranslate(event.target.innerHTML);
}

const b = () => {
    getTranslate('EN');
}

const c = () => {
    getTranslate('RU');
}

const changeLangRu = () => {
    if (btnEn) {
        btnEn.classList.remove('active');
        btnRu.classList.add('active');
        isRussian = true
    }
}

const changeLangEn = () => {
    if (btnRu) {
        btnRu.classList.remove('active');
        btnEn.classList.add('active');
        isRussian = false
    }
}

if (btnEn) {
    btnEn.addEventListener('click', a);
    btnEn.addEventListener('click', changeLangEn);
}

if (btnRu) {
    btnRu.addEventListener('click', a);
    btnRu.addEventListener('click', changeLangRu);
}

const setCurrentLang = () => {
    localStorage.setItem('curr-lang', isRussian)
}

const getCurrentLang = () => {
    isRussian = localStorage.getItem('curr-lang');
    if (isRussian == 'false') {
        b()
        changeLangEn()
    } else if (isRussian == 'true') {
        c()
        changeLangRu()
    }
}

window.addEventListener('beforeunload', setCurrentLang)
window.addEventListener('load', getCurrentLang)